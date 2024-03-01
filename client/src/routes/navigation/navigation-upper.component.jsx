import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import {
  NavigationUpper,
  NavigationUpperContainer,
  DesineyLogoLink,
  NavUpperItems,
  NavUpperLink,
  SiginContainer,
  SigninLogo,
  SigninLink,
} from "./navigation-upper.styled";
import { CgProfile } from "react-icons/cg";
import { PiTwitterLogoLight } from "react-icons/pi";
import { PiTwitterLogoDuotone } from "react-icons/pi";
import theme from "../../themes/theme";

const { colors } = theme;
const NavigationUpperBar = () => {
  return (
    <>
      <NavigationUpper>
        <DesineyLogoLink>
          <PiTwitterLogoDuotone size={32} color={colors.primary} />
        </DesineyLogoLink>
        <NavigationUpperContainer>
          <NavUpperItems>
            <NavUpperLink>Explore</NavUpperLink>
            <NavUpperLink>Trips</NavUpperLink>
            <NavUpperLink>Support</NavUpperLink>
            <NavUpperLink>Tips</NavUpperLink>
          </NavUpperItems>
        </NavigationUpperContainer>
        <SiginContainer>
          <SigninLogo>
            <CgProfile size={25} />
          </SigninLogo>
          <SigninLink>Sign in</SigninLink>
        </SiginContainer>
      </NavigationUpper>
      <Outlet />
    </>
  );
};

export default NavigationUpperBar;
