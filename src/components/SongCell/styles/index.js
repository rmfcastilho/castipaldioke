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
  color: #464648;
`;

const SongArtist = styled.p`
  font-size: 1rem;
  margin: 0;
  text-align: left;
  color: #7e7e80;
`;

const SongCode = styled.span`
  font-size: 1.5rem;
  text-align: left;
  color: #464648;
`;

export {
  SongCellWrapper,
  SongCellMeta,
  SongTitle,
  SongArtist,
  SongCode,
}
