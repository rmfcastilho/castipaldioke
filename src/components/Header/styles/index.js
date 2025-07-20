import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
`;

export const HeaderInput = styled.input`
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid rgb(0, 64, 156);
  width: 95%;
  font-size: 1rem;
  font-weight: 550;
  background-color: white;
  color: rgb(0, 64, 156);

  @media (min-width: 760px) {
    width: 70%;
  }
`;
