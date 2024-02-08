import styled from "styled-components";
import theme from "../../themes/theme";

const { fonts } = theme;
export const DiscoverCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  width: 80%;
  height: 220px;
  // border: 1px solid rgb(211, 211, 211);
  // box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  margin: 50px;
`;

export const DiscoverCardText = styled.div`
  display: flex;
  justify-content: flex-start;
  color: black;
  font-family: ${fonts.title};
  font-weight: 500;
  font-size: 30px;
  padding: 10px;
`;

export const DiscoverItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -25px;
`;
