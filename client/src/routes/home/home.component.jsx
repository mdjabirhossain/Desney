import React from "react";
import { HomePage } from "./home.styled";

import SearchCard from "../../components/search-card/search-card.component";

const Home = () => {
  return (
    <HomePage>
      <SearchCard />
    </HomePage>
  );
};

export default Home;
