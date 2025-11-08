import React from "react";

import InitialButton from "./_components/InitialButton";
import { InitialMapWrapper } from "./styles";

const ALPHABET = ["#", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const EMPTY_MAP = new Map();

const InitialsMap = ({ indexByInitial, onSelectInitial }) => {
  const effectiveIndexMap = indexByInitial ?? EMPTY_MAP;

  return (
    <InitialMapWrapper role="navigation" aria-label="Artists by initial">
      {ALPHABET.map((initial) => (
        <InitialButton
          key={initial}
          initial={initial}
          disabled={!effectiveIndexMap.has(initial)}
          onClick={() => onSelectInitial(initial)}
        />
      ))}
    </InitialMapWrapper>
  );
};

export default InitialsMap;
