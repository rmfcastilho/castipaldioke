import "@fontsource-variable/quicksand";
import React, { useState } from "react"
import { FixedSizeList as List } from 'react-window';

import { songs } from "../data";
import { Header, SongCell, InnerHeader } from "../components";
import { MainWrapper, SongCellWrapper, GlobalStyle } from "../styles";

const IndexPage = () => {
  const [songList, setSongList] = useState(songs);

  const onChangeSearch = (e) => {
    const { value } = e.target;

    setSongList(songs.filter((song) => (
      song.title.toLowerCase().includes(value.toLowerCase()) || song.artist.toLowerCase().includes(value.toLowerCase())
    )));
  }

  const Row = ({ index, style }) => (
    <div style={{...style, margin: '0.5rem 0'}}>
      <SongCell {...songList[index]} />
    </div>
  );

  return (
    <MainWrapper>
      <GlobalStyle />
      <Header onChangeSearch={onChangeSearch} />
      <InnerHeader />
      <List
        height={680}
        itemCount={songList.length}
        itemSize={82}
        width="100%"
        outerElementType={SongCellWrapper}
      >
        {Row}
      </List>
    </MainWrapper>
  )
}

export default IndexPage

export const Head = () => <title>Castipaldioke</title>
