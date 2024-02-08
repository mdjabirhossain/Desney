import styled from "styled-components";
import backgroundImage from "../../assets/disney2.png";

import theme from "../../themes/theme";

const { fonts } = theme;
const { colors } = theme;

export const TrendingPackageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 500px;
`;

export const BackgroundImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  opacity: 0.75;
`;

export const TrendingPackageTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  color: ${colors.text};
  font-family: ${fonts.title};
  font-size: 50px;
  font-weight: 800;
  padding: 10px;
  margin-left: 20px;
  width: 50%;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
`;

export const TrendingPackageText = styled.div`
  display: flex;
  justify-content: flex-start;
  color: ${colors.text};
  font-family: ${fonts.title};
  font-size: 20px;
  font-weight: 500;
  padding: 10px;
  margin-left: 20px;
  width: 30%;
  text-align: left;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
`;
