import styled from "styled-components";
import theme from "../../themes/theme";

const { colors } = theme;

export const SearchCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  width: 80%;
  height: 200px;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 10px;
  margin-top: 100px;
  // box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
`;

export const SearchCardNavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid rgb(211, 211, 211);
  margin-bottom: 25px;
`;

export const SearchCardNavItem = styled.div`
  padding: 10px;
  color: black;
  font-weight: 800;
  font-size: 13px;
  cursor: pointer;
  color: ${(props) => (props.active ? colors.primary : colors.secondary)};
  border-bottom: ${(props) =>
    props.active ? `2px solid ${colors.primary}` : "none"};
`;

export const SearchBarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
