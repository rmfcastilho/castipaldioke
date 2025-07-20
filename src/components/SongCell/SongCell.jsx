import React from "react";

import { SongCellWrapper, SongCellMeta, SongTitle, SongArtist, SongCode } from "./styles";

const SongCell = ({ artist, code, title }) => (
  <SongCellWrapper>
    <SongCellMeta>
      <SongTitle>{title}</SongTitle>
      <SongArtist>{artist}</SongArtist>
    </SongCellMeta>

    <SongCode>{code}</SongCode>
  </SongCellWrapper>
);

export default SongCell;
