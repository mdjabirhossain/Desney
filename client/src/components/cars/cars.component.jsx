import React from "react";
import { SearchBarsContainer } from "../search-card/search-card.styled";
import SearchBar from "../search-bar/search-bar.component";
import SearchButton from "../search-button/search-button.component";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";

const Cars = () => {
  return (
    <SearchBarsContainer>
      <SearchBar text="Pick-up" icon={<FaMapMarkerAlt size={20} />} />
      <SearchBar text="Drop-off" icon={<FaMapMarkerAlt size={20} />} />
      <SearchBar text="Dates" icon={<IoMdCalendar size={25} />} />
      <SearchBar text="Pick-up time" icon={<MdAccessTimeFilled size={20} />} />
      <SearchBar text="Drop-off time" icon={<MdAccessTimeFilled size={20} />} />
      <SearchButton />
    </SearchBarsContainer>
  );
};

export default Cars;
