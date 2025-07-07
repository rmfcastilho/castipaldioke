import React from "react";

import { HeaderWrapper, HeaderInput } from "./styles";

const Header = ({ onChangeSearch }) => (
  <HeaderWrapper>
    <h1>Castipaldioke</h1>
    <HeaderInput type="text" placeholder="Pesquisar musica ou artista..." onChange={(e) => onChangeSearch(e)} />
  </HeaderWrapper>
);


export default Header;
