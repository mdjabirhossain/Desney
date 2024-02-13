import React, { useState } from "react";
import { SearchBarsContainer } from "../search-card/search-card.styled";
import SearchCardNavBar from "../searchcard-navbar/searchcard-navbar.component";

const Flights = () => {
  const tabNames = ["Roundtrip", "One-way", "Multi-city"];
  const [activeTab, setActiveTab] = useState("Stays");

  const handleToggle = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <SearchBarsContainer>
      <SearchCardNavBar
        activeTab={activeTab}
        handleToggle={handleToggle}
        tabNames={tabNames}
      />
    </SearchBarsContainer>
  );
};

export default Flights;
