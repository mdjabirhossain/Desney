import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import {
  NavigationUpper,
  NavigationUpperContainer,
  DesineyLogoLink,
  NavUpperItems,
  NavUpperLink,
} from "./navigation-upper.styled";

const NavigationUpperBar = () => {
  return (
    <>
      <NavigationUpper>
        <DesineyLogoLink>Desiney</DesineyLogoLink>
        <NavigationUpperContainer>
          <NavUpperItems>
            <NavUpperLink>Support</NavUpperLink>
            <NavUpperLink>Trips</NavUpperLink>
          </NavUpperItems>
        </NavigationUpperContainer>
      </NavigationUpper>
      <Outlet />
    </>
  );
};

export default NavigationUpperBar;
