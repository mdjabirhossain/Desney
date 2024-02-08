import React from "react";
import {
  TrendingPackageContainer,
  BackgroundImageContainer,
  TrendingPackageTitle,
  TrendingPackageText,
} from "./trending-package.styled";
import { SpacerTop } from "../utilities/spacer.styled";
import Button from "../button/button.component";

const TrendingPackageCard = () => {
  return (
    <TrendingPackageContainer>
      <BackgroundImageContainer>
        <SpacerTop />
        <SpacerTop />
        <SpacerTop />
        <TrendingPackageTitle>Welcome to Disney</TrendingPackageTitle>
        <TrendingPackageText>
          Save on your family vacation when you bundle with our package
        </TrendingPackageText>
        <Button />
      </BackgroundImageContainer>
    </TrendingPackageContainer>
  );
};

export default TrendingPackageCard;
