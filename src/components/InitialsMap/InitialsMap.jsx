import React from "react";
import { songs } from "../../data";
import InitialButton from "./_components/InitialButton";
import { InitialMapWrapper } from "./styles";

const normalize = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-zA-Z0-9]/g, "")    // Remove non-alphanumerics
    .toLowerCase();

const isDigit = (char) => /^\d$/.test(char);

const InitialsMap = () => {
  const artistList = Array.from(new Set(songs.map((song) => song.artist)));

  const initials = artistList.map((artist) => {
    const normalized = normalize(artist);
    const initial = normalized.charAt(0);
    return isDigit(initial) ? "#" : initial.toUpperCase();
  });

  const uniqueInitials = Array.from(new Set(initials)).sort();

  return (
    <InitialMapWrapper>
      {uniqueInitials.map((initial) => (
        <InitialButton initial={initial} key={initial} />
      ))}
    </InitialMapWrapper>
  );
};

export default InitialsMap;
