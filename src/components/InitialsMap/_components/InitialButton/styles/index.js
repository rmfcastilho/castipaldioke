import styled from "styled-components";

export const StyledInitialButton = styled.button`
  align-items: center;
  background-color: ${({ disabled }) =>
    disabled ? "transparent" : "rgba(0, 64, 156, 1)"};
  border: 1px solid rgba(0, 64, 156, 0.4);
  border-radius: 50%;
  color: ${({ disabled }) =>
    disabled ? "rgba(0, 64, 156, 0.35)" : "#ffffff"};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  display: flex;
  font-size: 0.85rem;
  font-weight: 600;
  height: 2rem;
  justify-content: center;
  line-height: 1;
  padding: 0;
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  width: 2rem;

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.05)")};
  }

  &:focus-visible {
    outline: 2px solid rgba(0, 64, 156, 0.6);
    outline-offset: 2px;
  }
`;
