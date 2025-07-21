import React from "react";

import { ActiveFilterPillWrapper, ArtistName, FilterOuterWrapper, IconWrapper } from "./styles";

const ActiveFilterPill = ({ artist, onResetArtist }) => (
  <FilterOuterWrapper>
    <ActiveFilterPillWrapper role="button" onClick={onResetArtist}>
      <IconWrapper>X</IconWrapper>
      <ArtistName>{artist}</ArtistName>
    </ActiveFilterPillWrapper>
  </FilterOuterWrapper>
);

export default ActiveFilterPill;
