import styled from "styled-components";
import theme from "../../themes/theme";

const { colors } = theme;
export const SearchCardNavBarContainer = styled.div`
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
