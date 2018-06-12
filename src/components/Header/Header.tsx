import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.div`
  height: 32px;
  line-height: 32px;
  background: #f1f1f1;
`;

const LogoWrap = styled.span`
  margin: 0 10px;
`;

const MenuLinkWrap = styled.span`
  margin: 0 10px;
  color: blue;
`;

const Header = () => (
  <HeaderWrap>
    <LogoWrap>React-ts-boilerplate</LogoWrap>
    <NavLink to="/home" activeClassName="active">
      <MenuLinkWrap>Home</MenuLinkWrap>
    </NavLink>
    <NavLink to="/explore" exact activeClassName="active">
      <MenuLinkWrap>Explore</MenuLinkWrap>
    </NavLink>
    <NavLink to="/about" exact activeClassName="active">
      <MenuLinkWrap>About</MenuLinkWrap>
    </NavLink>
  </HeaderWrap>
);

export default Header;
