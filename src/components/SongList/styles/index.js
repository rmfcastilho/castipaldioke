import styled from "styled-components";

export const SongListWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  align-items: flex-start;
  padding-top: 1rem;
`;

export const SongListViewport = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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

export const SongListControls = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
`;

export const SongListToggleLabel = styled.label`
  align-items: center;
  display: inline-flex;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: rgba(0, 64, 156, 0.85);

  @media (min-width: 760px) {
    font-size: 1rem;
  }
`;

export const SongListToggleInput = styled.input`
  width: 1.1rem;
  height: 1.1rem;
  accent-color: rgba(0, 64, 156, 0.85);
  cursor: pointer;
`;
