import React from "react";
import { HomePage } from "./home.styled";

import SearchCard from "../../components/search-card/search-card.component";
import DiscoverCard from "../../components/discover-card/discover-card.component";
import TrendingPackageCard from "../../components/trending-package/trending-package.component";
const Home = () => {
  return (
    <HomePage>
      <SearchCard />
      <DiscoverCard />
      <TrendingPackageCard />
    </HomePage>
  );
};

export default Home;
