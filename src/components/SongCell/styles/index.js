import styled from "styled-components";

const SongCellWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(9, 7, 157, 0.3);

  &:hover {
    border: 1px solid black;
  }
`;

const SongCellMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
  min-width: 0;
`;

const SongTitle = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  text-align: left;
  color: rgb(0, 64, 156);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 500px) {
    max-width: 20em;
  }

  @media (min-width: 760px) {
    font-size: 1.25rem;
  }
`;

const SongArtist = styled.p`
  font-size: 0.9rem;
  margin: 0;
  text-align: left;
  color: rgb(0, 64, 156);

  @media (min-width: 760px) {
    font-size: 1rem;
  }
`;

const SongCode = styled.span`
  font-size: 1.3rem;
  color: #0034f2;
  text-align: left;
  letter-spacing: 1.25px;
  font-weight: 500;
  flex-shrink: 0;

  @media (min-width: 760px) {
    font-size: 1.5rem;
  }
`;

export {
  SongCellWrapper,
  SongCellMeta,
  SongTitle,
  SongArtist,
  SongCode,
}
