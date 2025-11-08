import "@fontsource-variable/quicksand";
import React, { useState } from "react"

import { songs } from "../data";
import { Header, InnerHeader, ArtistList, SongList, ListTypeSelect, ActiveFilterPill } from "../components";
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

  const onResetArtist = () => {
    setSelectedArtist(null);
    setCurrentView('songs');
    setSongList(songs);
  }

  const onSelectView = (view) => {
    setCurrentView(view);
  }

  const normalize = (str) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9 ]/gi, "")
      .toLowerCase();

  const onChangeSearch = (e) => {
    const normalizedSearch = normalize(e.target.value);

    setSongList(
      songs.filter((song) =>
        normalize(song.title).includes(normalizedSearch) ||
        normalize(song.artist).includes(normalizedSearch)
      )
    );
  };

  return (
    <MainWrapper>
      <GlobalStyle />
      <Header onChangeSearch={onChangeSearch} />
      <ListTypeSelect onChange={onSelectView} value={currentView} />
      {selectedArtist && <ActiveFilterPill artist={selectedArtist} onResetArtist={onResetArtist} />}
      {currentView === 'songs' && <InnerHeader/>}
      {currentView === 'songs' ? (
          <SongList songList={songList} />
        ) : (
          <ArtistList onSelectArtist={onSelectArtist} songList={songList} />
        )}
    </MainWrapper>
  )
}

export default IndexPage

export const Head = () => <title>Castipaldioke</title>
