import React, { useState } from "react";
import {
  SearchCardContainer,
  SearchCardNavBar,
  SearchCardNavItem,
} from "./search-card.styled";
import Stays from "../stays/stays.component";
import Flights from "../flights/flights.component";
import Cars from "../cars/cars.component";
import Packages from "../packages/packages.component";

// there is an active status for a div

const SearchCard = () => {
  const [activeTab, setActiveTab] = useState("Stays");

  const handleToggle = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <SearchCardContainer>
      <SearchCardNavBar>
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
      </SearchCardNavBar>
      {(activeTab == "Stays" && <Stays />) ||
        (activeTab == "Flights" && <Flights />) ||
        (activeTab == "Cars" && <Cars />) ||
        (activeTab == "Packages" && <Packages />)}
    </SearchCardContainer>
  );
};

export default SearchCard;
