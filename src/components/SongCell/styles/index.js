import styled from "styled-components";

const SongCellWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  backdrop-filter: blur(6px);
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  user-select: none;
  font-weight: bolder;
  margin-bottom: 1rem;
  background-color: hsla(260, 25%, 95%, 0.45);
  backdrop-filter: blur(1rem);
  
  &:hover {
    border: 1px solid black;
  }
`;

const SongCellMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const SongTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  text-align: left;
  color: #0a1380;
`;

const SongArtist = styled.p`
  font-size: 1rem;
  margin: 0;
  text-align: left;
  color: #5d6eff;
`;

const SongCode = styled.span`
  font-size: 1.5rem;
  text-align: left;
`;

export {
  SongCellWrapper,
  SongCellMeta,
  SongTitle,
  SongArtist,
  SongCode,
}
