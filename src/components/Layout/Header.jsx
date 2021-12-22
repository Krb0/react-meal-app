import React from "react";
import StyledHeader from "./StyledHeader";
import StyledBanner from "./StyledBanner";
import bannerImg from "../../assets/meals.jpg";
import HeaderCart from "./HeaderCart";
import { Fragment } from "react";
const Header = ({ onShowCart }) => {
  return (
    <Fragment>
      <StyledHeader>
        <h1>ReactMeals</h1>
        <HeaderCart onShowCart={onShowCart} />
      </StyledHeader>
      <StyledBanner>
        <img src={bannerImg} alt="meal banner" />
      </StyledBanner>
    </Fragment>
  );
};

export default Header;
