import React from "react";
import { StyledInitialButton } from "./styles";

const InitialButton = ({ initial }) => <StyledInitialButton href={`#${initial}`}>{initial}</StyledInitialButton>;

export default InitialButton;
