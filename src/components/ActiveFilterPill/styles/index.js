import styled from 'styled-components';

const ActiveFilterPillWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  background: rgba(255, 39, 39, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(152, 4, 29, 0.3);
  justify-content: space-between;
  cursor: pointer;


  @media (min-width: 760px) {
    font-size: 1.25rem;
  }
`;

const IconWrapper = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: rgb(154, 3, 3);
`;

const ArtistName = styled.span`
  font-size: 1.125rem;
`;

const FilterOuterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 2.5rem 1rem 0 1rem;
`;

export {
  ActiveFilterPillWrapper,
  ArtistName,
  FilterOuterWrapper,
  IconWrapper,
}
