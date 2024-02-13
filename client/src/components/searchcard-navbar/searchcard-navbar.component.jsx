import React from "react";

const SearchCardNavBar = () => {
  <SearchCardNavBarContainer>
    <SearchCardNavItem
      active={activeTab === "Stays"}
      onClick={() => handleToggle("Stays")}
    >
      Stays
    </SearchCardNavItem>
    <SearchCardNavItem
      active={activeTab === "Flights"}
      onClick={() => handleToggle("Flights")}
    >
      Flights
    </SearchCardNavItem>
    <SearchCardNavItem
      active={activeTab === "Cars"}
      onClick={() => handleToggle("Cars")}
    >
      Cars
    </SearchCardNavItem>
    <SearchCardNavItem
      active={activeTab === "Packages"}
      onClick={() => handleToggle("Packages")}
    >
      Packages
    </SearchCardNavItem>
  </SearchCardNavBarContainer>;
};
