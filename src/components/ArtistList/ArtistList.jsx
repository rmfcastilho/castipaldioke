import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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

const DEFAULT_LIST_HEIGHT = 680;

const ArtistList = ({ onSelectArtist, songList }) => {
  const listRef = useRef(null);
  const initialsMapRef = useRef(null);
  const [listHeight, setListHeight] = useState(DEFAULT_LIST_HEIGHT);

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

    if (!initialIndexMap.has("#") && uniqueArtists.length > 0) {
      initialIndexMap.set("#", 0);
    }

    return {
      artistList: uniqueArtists,
      indexByInitial: initialIndexMap,
    };
  }, [songList]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const node = initialsMapRef.current;

    if (!node) {
      return;
    }

    const measure = () => {
      const { height } = node.getBoundingClientRect();

      if (Number.isFinite(height) && height > 0) {
        setListHeight(Math.max(DEFAULT_LIST_HEIGHT, Math.ceil(height)));
      }
    };

    measure();

    if (typeof window.ResizeObserver === "function") {
      const observer = new window.ResizeObserver(measure);
      observer.observe(node);

      return () => observer.disconnect();
    }

    const timeoutId = window.setTimeout(measure, 100);

    return () => window.clearTimeout(timeoutId);
  }, [artistList.length]);

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
      <InitialsMap
        ref={initialsMapRef}
        indexByInitial={indexByInitial}
        onSelectInitial={handleSelectInitial}
      />
      <ArtistListViewport>
        <List
          ref={listRef}
          height={listHeight}
          itemCount={artistList.length}
          itemKey={itemKey}
          itemSize={60}
          width="100%"
        >
          {ArtistRow}
        </List>
      </ArtistListViewport>
    </ArtistListWrapper>
  );
};

export default ArtistList;
