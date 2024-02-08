import React from "react";
import { MdFamilyRestroom } from "react-icons/md";
import theme from "../../themes/theme";
import {
  DiscoverItemContainer,
  DiscoverItemLogo,
  DiscoverItemText,
} from "./discover-item.styled";

const { colors } = theme;

const DiscoverItem = ({ icon, text }) => {
  return (
    <DiscoverItemContainer>
      <DiscoverItemLogo>
        {/* <MdFamilyRestroom size={32} color={colors.primary} /> */}
        {icon}
      </DiscoverItemLogo>
      <DiscoverItemText>{text}</DiscoverItemText>
    </DiscoverItemContainer>
  );
};

export default DiscoverItem;
