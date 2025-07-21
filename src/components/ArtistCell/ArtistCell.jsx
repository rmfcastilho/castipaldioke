import React from "react";

import { StyledArtistCell } from "./styles";

const ArtistCell = ({ name, onSelectArtist }) => (
  <StyledArtistCell onClick={() => onSelectArtist(name)}>
    <span>{name}</span>
    <span>{'>'}</span>
  </StyledArtistCell>
);

export default ArtistCell;
