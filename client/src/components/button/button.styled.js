import styled from "styled-components";
import theme from "../../themes/theme";

const { colors } = theme;

export const ButtonStyled = styled.button`
  background-color: ${colors.button};
  color: ${colors.text};
  width: 250px;
  height: 150px;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  height: 47px;
  margin: 10px;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 15px;
  margin-left: 30px;
  margin-top: 20px;
`;
