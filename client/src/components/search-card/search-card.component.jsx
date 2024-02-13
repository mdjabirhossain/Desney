import React, { useState } from "react";
import { SearchCardContainer } from "./search-card.styled";
import Stays from "../stays/stays.component";
import Flights from "../flights/flights.component";
import Cars from "../cars/cars.component";
import Packages from "../packages/packages.component";
import SearchCardNavBar from "../searchcard-navbar/searchcard-navbar.component";

const SearchCard = () => {
  const [activeTab, setActiveTab] = useState("Stays");

  const handleToggle = (tabName) => {
    setActiveTab(tabName);
  };

  const tabNames = ["Stays", "Flights", "Cars", "Packages"];

  return (
    <SearchCardContainer>
      <SearchCardNavBar
        activeTab={activeTab}
        handleToggle={handleToggle}
        tabNames={tabNames}
      />
      {activeTab === "Stays" && <Stays />}
      {activeTab === "Flights" && <Flights />}
      {activeTab === "Cars" && <Cars />}
      {activeTab === "Packages" && <Packages />}
    </SearchCardContainer>
  );
};

export default SearchCard;
