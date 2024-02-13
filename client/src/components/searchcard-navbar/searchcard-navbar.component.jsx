import React from "react";
import {
  SearchCardNavBarContainer,
  SearchCardNavItem,
} from "./searchcard-navbar.styled";

const SearchCardNavBar = ({ activeTab, handleToggle, tabNames }) => {
  return (
    <SearchCardNavBarContainer>
      {tabNames.map((tabName) => (
        <SearchCardNavItem
          key={tabName}
          active={activeTab === tabName}
          onClick={() => handleToggle(tabName)}
        >
          {tabName}
        </SearchCardNavItem>
      ))}
    </SearchCardNavBarContainer>
  );
};

export default SearchCardNavBar;
