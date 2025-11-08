import React, { useCallback, useMemo, useRef } from "react";
import { FixedSizeList as List } from "react-window";

import SongCell from "../SongCell";
import InitialsMap from "../InitialsMap";

import {
  SongCellWrapper,
  SongListViewport,
  SongListWrapper,
} from "./styles";

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

const SongList = ({ songList }) => {
  const listRef = useRef(null);

  const indexByInitial = useMemo(() => {
    const map = new Map();

    songList.forEach((song, index) => {
      const initial = getInitial(song.artist ?? song.title ?? "");

      if (!map.has(initial)) {
        map.set(initial, index);
      }
    });

    if (!map.has("#") && songList.length > 0) {
      map.set("#", 0);
    }

    return map;
  }, [songList]);

  const handleSelectInitial = useCallback(
    (initial) => {
      if (!listRef.current) {
        return;
      }

      if (initial === "#") {
        listRef.current.scrollToItem(0, "start");
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
    (index) => {
      const song = songList[index];

      if (!song) {
        return index;
      }

      return `${song.artist ?? "unknown"}-${song.title ?? index}`;
    },
    [songList]
  );

  const SongRow = ({ index, style }) => (
    <div style={{ ...style, margin: "0.5rem 0" }}>
      <SongCell {...songList[index]} />
    </div>
  );

  return (
    <SongListWrapper>
      <SongListViewport>
        <List
          ref={listRef}
          height={680}
          itemCount={songList.length}
          itemKey={itemKey}
          itemSize={82}
          width="100%"
          outerElementType={SongCellWrapper}
        >
          {SongRow}
        </List>
      </SongListViewport>
      <InitialsMap
        indexByInitial={indexByInitial}
        onSelectInitial={handleSelectInitial}
      />
    </SongListWrapper>
  );
};

export default SongList;
