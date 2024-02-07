import React from "react";
import { SearchContainer, SearchInput } from "./search-bar.styled";

const SearchBar = ({ text }) => {
  return <SearchContainer>{text}</SearchContainer>;
};

export default SearchBar;
