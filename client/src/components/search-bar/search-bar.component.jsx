import React from "react";
import { SearchContainer, SearchIcon, SearchInput } from "./search-bar.styled";

const SearchBar = ({ icon, text }) => {
  return (
    <SearchContainer>
      <SearchIcon>{icon}</SearchIcon>
      <SearchInput>{text}</SearchInput>
    </SearchContainer>
  );
};

export default SearchBar;
