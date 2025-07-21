import styled from 'styled-components';

export const SongCellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE 10+ */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;
