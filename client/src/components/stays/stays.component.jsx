import React from "react";
import { SearchBarsContainer } from "../search-card/search-card.styled";
import SearchBar from "../search-bar/search-bar.component";
import SearchButton from "../search-button/search-button.component";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";

const Stays = () => {
  return (
    <SearchBarsContainer>
      <SearchBar text="Going to" icon={<FaMapMarkerAlt size={20} />} />
      <SearchBar text="Dates" icon={<IoMdCalendar size={25} />} />
      <SearchBar text="Travelers" icon={<IoPersonSharp size={20} />} />
      <SearchButton />
    </SearchBarsContainer>
  );
};

export default Stays;
