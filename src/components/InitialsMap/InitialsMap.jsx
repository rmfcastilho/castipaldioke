import React from "react";
import { songs } from "../../data";
import InitialButton from "./_components/InitialButton";
import { InitialMapWrapper } from "./styles";

const InitialsMap = () => {
  const initials = Object.keys(songs);

  return (
    <InitialMapWrapper>
      {initials.map((initial) => (
        <InitialButton initial={initial} key={initial} />
      ))}
    </InitialMapWrapper>
  );
};

export default InitialsMap;
