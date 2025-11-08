import styled from "styled-components";

export const SongListWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  align-items: stretch;
  padding-top: 1rem;
`;

export const SongListViewport = styled.div`
  flex: 1;
  min-width: 0;
`;

export const SongCellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
