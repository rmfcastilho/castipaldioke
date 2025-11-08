import styled from "styled-components";

export const SongListWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  align-items: flex-start;
`;

export const SongListViewport = styled.div`
  flex: 1;
`;

export const SongCellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;
