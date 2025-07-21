import styled, { createGlobalStyle } from "styled-components";

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  margin: 0 auto;
  width: 95%;
  min-width: 420px;

  @media (min-width: 760px) {
    width: 60%;
    max-width: 800px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Inter Variable", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: hsl(246, 40%, 90%);
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
