import React from "react";
import {
  MdFamilyRestroom,
  MdOutlineAllInclusive,
  MdOutlineCabin,
  MdOutlinePets,
  MdHolidayVillage,
  MdChalet,
  MdSpa,
} from "react-icons/md";
import {
  FaUmbrellaBeach,
  FaHotTubPerson,
  FaWater,
  FaSpa,
  FaPersonSwimming,
} from "react-icons/fa6";
import { IoBoat } from "react-icons/io5";
import DiscoverItem from "../discover-item/discover-item.component";
import theme from "../../themes/theme";
import {
  DiscoverCardContainer,
  DiscoverCardText,
  DiscoverItemsContainer,
} from "./discover-card.styled";

const items = [
  "Family friendly",
  "Resort",
  "Villa",
  "Spa",
  "Hot tub",
  "Ocean view",
  "All inclusive",
  "Cabin",
  "Pet friendly",
  "Boat",
  "Chalet",
  "Pool",
];

const { sizes } = theme;
const { colors } = theme;

const icons = [
  <MdFamilyRestroom
    key="family"
    size={sizes.discoverIcon}
    color={colors.primary}
  />,
  <FaUmbrellaBeach
    key="resort"
    size={sizes.discoverIcon}
    color={colors.primary}
  />,
  <MdHolidayVillage
    key="villa"
    size={sizes.discoverIcon}
    color={colors.primary}
  />,
  <FaSpa key="spa" size={sizes.discoverIcon} color={colors.primary} />,
  <FaHotTubPerson
    key="hot-tub"
    size={sizes.discoverIcon}
    color={colors.primary}
  />,
  <MdOutlineAllInclusive
    key="all-inclusive"
    size={sizes.discoverIcon}
    color={colors.primary}
  />,
  <FaWater key="ocean" size={sizes.discoverIcon} color={colors.primary} />,
  <MdOutlineCabin
    key="cabin"
    size={sizes.discoverIcon}
    color={colors.primary}
  />,
  <MdOutlinePets
    key="pet-friendly"
    size={sizes.discoverIcon}
    color={colors.primary}
  />,
  <IoBoat key="boat" size={sizes.discoverIcon} color={colors.primary} />,
  <MdChalet key="chalet" size={sizes.discoverIcon} color={colors.primary} />,
  <FaPersonSwimming
    key="swimming"
    size={sizes.discoverIcon}
    color={colors.primary}
  />,
];

const DiscoverCard = () => {
  return (
    <DiscoverCardContainer>
      <DiscoverCardText>Discover your new favorite stay</DiscoverCardText>
      <DiscoverItemsContainer>
        {items.map((item, index) => (
          <DiscoverItem key={index} icon={icons[index]} text={item} />
        ))}
      </DiscoverItemsContainer>
    </DiscoverCardContainer>
  );
};

export default DiscoverCard;
