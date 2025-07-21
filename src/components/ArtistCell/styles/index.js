import styled from 'styled-components';

export const StyledArtistCell = styled.button`
  display: flex;
  width: 100%;
  text-align: left;
  cursor: pointer;
  color: rgb(0, 64, 156);
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(9, 7, 157, 0.3);
  justify-content: space-between;

  @media (min-width: 760px) {
    font-size: 1.25rem;
  }
`;
