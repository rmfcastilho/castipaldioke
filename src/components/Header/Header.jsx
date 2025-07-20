import React from "react";

import { HeaderWrapper, HeaderInput } from "./styles";

const Header = ({ onChangeSearch }) => (
  <HeaderWrapper>
    <h1 style={{ color: 'rgb(0, 64, 156)'}}>CASTIPALDIOKÊ</h1>
    <HeaderInput type="text" placeholder="Pesquisar musica ou artista..." onChange={(e) => onChangeSearch(e)} />
  </HeaderWrapper>
);


export default Header;
