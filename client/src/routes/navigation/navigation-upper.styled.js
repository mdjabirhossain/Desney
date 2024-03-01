import styled from "styled-components";
import { Link } from "react-router-dom";

import theme from "../../themes/theme";

const { colors } = theme;

export const NavigationUpper = styled.div`
  background-color: white;
  //   border-bottom: 1px solid black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    trastion: 0.8s all ease;
  }
`;

export const NavigationUpperContainer = styled.div`
  margin-left: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const DesineyLogoLink = styled(Link)`
  color: ${colors.text2};
  text-decoration: none;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavUpperItems = styled.div`
  width: 100%;
  display: flex;
  // border: 1px solid green;
  margin-right: 55px;
  align-items: center;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
  .nav-link {
    font-weight: 500;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
  }
  .nav-link:hover {
    color: tomato;
  }
  // .nav-link: active {
  //   border-bottom: 2px solid ${({ theme }) => theme.primary};
  // }
`;

export const NavUpperLink = styled(Link)`
  // color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  // :hover {
  //   color: ${({ theme }) => "red"};
  // }
  color: ${colors.text2};
  &:hover {
    background-color: rgb(211, 211, 211);
    border-radius: 5px;
  }
  height: 30px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SiginContainer = styled.div`
  height: 40px;
  width: 100px;
  border: 1px solid;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SigninLogo = styled.div`
  padding: 5px;
  margin-top: 4px;
`;

export const SigninLink = styled(Link)`
  color: ${colors.text2};
  text-decoration: none;
  padding: 5px;
`;
