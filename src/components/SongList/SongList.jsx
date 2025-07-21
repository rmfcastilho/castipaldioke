import React from "react"
import { FixedSizeList as List } from 'react-window';

import SongCell from '../SongCell';

import { SongCellWrapper } from './styles';

const SongList = ({ songList }) => {
  const SongRow = ({ index, style }) => (
    <div style={{...style, margin: '0.5rem 0'}}>
      <SongCell {...songList[index]} />
    </div>
  );

  return (
    <List
      height={680}
      itemCount={songList.length}
      itemSize={82}
      width="100%"
      outerElementType={SongCellWrapper}
    >
      {SongRow}
    </List>
  )
}

export default SongList;
