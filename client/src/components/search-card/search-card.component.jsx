import React from "react";
import {
  SearchCardContainer,
  SearchCardNavBar,
  SearchCardNavItem,
  SearchBarsContainer,
} from "./search-card.styled";
import SearchBar from "../search-bar/search-bar.component";
import SearchButton from "../search-button/search-button.component";

const SearchCard = () => {
  return (
    <SearchCardContainer>
      <SearchCardNavBar>
        <SearchCardNavItem>Stays</SearchCardNavItem>
        <SearchCardNavItem>Flights</SearchCardNavItem>
        <SearchCardNavItem>Cars</SearchCardNavItem>
        <SearchCardNavItem>Packages</SearchCardNavItem>
      </SearchCardNavBar>
      <SearchBarsContainer>
        <SearchBar />
        <SearchBar />
        <SearchBar />
        <SearchButton />
      </SearchBarsContainer>
    </SearchCardContainer>
  );
};

export default SearchCard;
