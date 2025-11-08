import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FixedSizeList as List } from "react-window";

import SongCell from "../SongCell";
import InitialsMap from "../InitialsMap";

import {
  SongCellWrapper,
  SongListControls,
  SongListViewport,
  SongListToggleInput,
  SongListToggleLabel,
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

const DEFAULT_LIST_HEIGHT = 680;

const SongList = ({ songList }) => {
  const listRef = useRef(null);
  const initialsMapRef = useRef(null);
  const [hideJapanese, setHideJapanese] = useState(true);
  const [listHeight, setListHeight] = useState(DEFAULT_LIST_HEIGHT);

  const filteredSongs = useMemo(() => {
    if (!hideJapanese) {
      return songList;
    }

    return songList.filter(
      (song) => (song.language ?? "").toUpperCase() !== "JAP"
    );
  }, [hideJapanese, songList]);

  const indexByInitial = useMemo(() => {
    const map = new Map();

    filteredSongs.forEach((song, index) => {
      const initial = getInitial(song.artist ?? song.title ?? "");

      if (!map.has(initial)) {
        map.set(initial, index);
      }
    });

    if (!map.has("#") && filteredSongs.length > 0) {
      map.set("#", 0);
    }

    return map;
  }, [filteredSongs]);

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
  }, [filteredSongs.length]);

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
      const song = filteredSongs[index];

      if (!song) {
        return index;
      }

      return `${song.artist ?? "unknown"}-${song.title ?? index}`;
    },
    [filteredSongs]
  );

  const handleToggleHideJapanese = useCallback((event) => {
    setHideJapanese(event.target.checked);
  }, []);

  const SongRow = ({ index, style }) => (
    <div style={{ ...style, margin: "0.5rem 0" }}>
      <SongCell {...filteredSongs[index]} />
    </div>
  );

  return (
    <>
      <SongListControls>
        <SongListToggleLabel>
          <SongListToggleInput
            checked={hideJapanese}
            onChange={handleToggleHideJapanese}
            type="checkbox"
          />
          Esconder músicas em japonês
        </SongListToggleLabel>
      </SongListControls>

      <SongListWrapper>
        <InitialsMap
          ref={initialsMapRef}
          indexByInitial={indexByInitial}
          onSelectInitial={handleSelectInitial}
        />
        <SongListViewport>
          <List
            ref={listRef}
            height={listHeight}
            itemCount={filteredSongs.length}
            itemKey={itemKey}
            itemSize={82}
            width="100%"
            outerElementType={SongCellWrapper}
          >
            {SongRow}
          </List>
        </SongListViewport>
      </SongListWrapper>
    </>
  );
};

export default SongList;
