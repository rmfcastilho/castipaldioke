import styled from 'styled-components';

const ListTypeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 50%;
  justify-content: space-between;
  padding: 0 1rem;
  margin-top: 2rem;
`;

const ListTypeOption = styled.span`
  cursor: pointer;
  font-size: 1.5rem;
`;

export {
  ListTypeOption,
  ListTypeWrapper,
}
