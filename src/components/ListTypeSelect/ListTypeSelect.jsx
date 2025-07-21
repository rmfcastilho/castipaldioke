import React from "react"

import { ListTypeOption, ListTypeWrapper } from "./styles";

const ListTypeSelect = ({ onChange, value }) => {
  return (
    <ListTypeWrapper>
      <ListTypeOption onClick={() => onChange("songs")} isActive={value === "songs"}>MÚSICAS</ListTypeOption>
      <ListTypeOption onClick={() => onChange("artists")} isActive={value === "artists"}>ARTISTAS</ListTypeOption>
    </ListTypeWrapper>
  )
}

export default ListTypeSelect;
