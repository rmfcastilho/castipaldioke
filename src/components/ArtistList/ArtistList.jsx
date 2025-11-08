import React, { useCallback, useMemo, useRef } from "react";
import { FixedSizeList as List } from "react-window";

import { ArtistListViewport, ArtistListWrapper } from "./styles";

import InitialsMap from "../InitialsMap";
import ArtistCell from "../ArtistCell";

const normalize = (str = "") =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();

const getInitial = (value) => {
  const normalized = normalize(value);
  const firstChar = normalized.charAt(0);

  if (!firstChar) {
    return "#";
  }

  return /^\d$/.test(firstChar) ? "#" : firstChar.toUpperCase();
};

const ArtistList = ({ onSelectArtist, songList }) => {
  const listRef = useRef(null);

  const { artistList, indexByInitial } = useMemo(() => {
    const uniqueArtists = Array.from(
      new Set(songList.map((song) => song.artist))
    ).sort((a, b) => normalize(a).localeCompare(normalize(b)));

    const initialIndexMap = new Map();

    uniqueArtists.forEach((artist, index) => {
      const initial = getInitial(artist);

      if (!initialIndexMap.has(initial)) {
        initialIndexMap.set(initial, index);
      }
    });

    return {
      artistList: uniqueArtists,
      indexByInitial: initialIndexMap,
    };
  }, [songList]);

  const handleSelectInitial = useCallback(
    (initial) => {
      if (!listRef.current) {
        return;
      }

      const targetIndex = indexByInitial.get(initial);

      if (typeof targetIndex !== "number") {
        return;
      }

      listRef.current.scrollToItem(targetIndex, "start");
    },
    [indexByInitial]
  );

  const itemKey = useCallback(
    (index) => artistList[index] ?? index,
    [artistList]
  );

  const ArtistRow = ({ index, style }) => (
    <div style={{ ...style, margin: "0.5rem 0" }}>
      <ArtistCell name={artistList[index]} onSelectArtist={onSelectArtist} />
    </div>
  );

  return (
    <ArtistListWrapper>
      <ArtistListViewport>
        <List
          ref={listRef}
          height={680}
          itemCount={artistList.length}
          itemKey={itemKey}
          itemSize={60}
          width="100%"
        >
          {ArtistRow}
        </List>
      </ArtistListViewport>

      <InitialsMap
        indexByInitial={indexByInitial}
        onSelectInitial={handleSelectInitial}
      />
    </ArtistListWrapper>
  );
};

export default ArtistList;
