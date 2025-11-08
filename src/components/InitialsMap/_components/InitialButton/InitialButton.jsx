import React from "react";

import { StyledInitialButton } from "./styles";

const InitialButton = ({ disabled, initial, onClick }) => (
  <StyledInitialButton
    type="button"
    onClick={() => {
      if (disabled) {
        return;
      }

      onClick();
    }}
    disabled={disabled}
  >
    {initial}
  </StyledInitialButton>
);

export default InitialButton;
