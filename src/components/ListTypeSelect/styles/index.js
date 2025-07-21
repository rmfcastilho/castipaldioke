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
  cursor: ${({ isActive }) => !isActive ? 'pointer' : 'default'};
  font-size: 1.5rem;
  font-weight: ${({ isActive }) => isActive ? 'bold' : 'normal'};
  margin: 0;
  text-align: left;
  color: ${({ isActive }) => isActive ? 'rgba(0, 64, 156, 1)' : 'rgba(0, 64, 156, 0.5)'};
  transition: all 0.2s ease-in-out;

  ${({ isActive }) => !isActive && `
    &:hover {
      transform: scale(1.05);
      color: rgb(3, 106, 246);
    }
  `}
`;

export {
  ListTypeOption,
  ListTypeWrapper,
}
