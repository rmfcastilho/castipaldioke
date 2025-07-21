import React from "react"
import { FixedSizeList as List } from 'react-window';

import { ArtistListWrapper } from './styles';

import InitialsMap from '../InitialsMap';
import ArtistCell from '../ArtistCell';

const ArtistList = ({ onSelectArtist, songList }) => {
  const artistList = Array.from(
    new Set(songList.map((song) => song.artist))
  );

  const ArtistRow = ({ index, style }) => (
    <div style={{...style, margin: '0.5rem 0'}}>
      <ArtistCell name={artistList[index]} onSelectArtist={onSelectArtist} />
    </div>
  );

  return (
    <List
      height={680}
      itemCount={artistList.length}
      itemSize={60}
      width="100%"
    >
      {ArtistRow}
    </List>
  )
}

export default ArtistList;
