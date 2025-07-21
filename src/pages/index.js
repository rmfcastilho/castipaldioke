import "@fontsource-variable/quicksand";
import React, { useState } from "react"

import { songs } from "../data";
import { Header, SongCell, InnerHeader, ArtistList, SongList, ListTypeSelect } from "../components";
import { MainWrapper, GlobalStyle } from "../styles";

const IndexPage = () => {
  const [songList, setSongList] = useState(songs);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [currentView, setCurrentView] = useState('songs');

  const onSelectArtist = (artist) => {
    setSelectedArtist(artist);
    setCurrentView('songs');
    setSongList(songs.filter((song) => song.artist === artist));
  }

  const onSelectView = (view) => {
    setCurrentView(view);
  }

  const onChangeSearch = (e) => {
    const { value } = e.target;

    setSongList(songs.filter((song) => (
      song.title.toLowerCase().includes(value.toLowerCase()) || song.artist.toLowerCase().includes(value.toLowerCase())
    )));
  }

  return (
    <MainWrapper>
      <GlobalStyle />
      <Header onChangeSearch={onChangeSearch} />
      <ListTypeSelect onChange={onSelectView} value={currentView} />
      {currentView === 'songs' && <InnerHeader/>}
      {currentView === 'songs' ? <SongList songList={songList} /> : <ArtistList onSelectArtist={onSelectArtist} songList={songList} />}
    </MainWrapper>
  )
}

export default IndexPage

export const Head = () => <title>Castipaldioke</title>
