import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.div`
  height: 32px;
`;

const MenuLinkWrap = styled.span`
  margin: 0 10px;
  color: blue;
`;

const Header = () => (
  <HeaderWrap>
    <span>React Typescript Boilerplate</span>
    <NavLink to="/home" activeClassName="active" replace>
      <MenuLinkWrap>Home</MenuLinkWrap>
    </NavLink>
    <NavLink to="/explore" exact activeClassName="active" replace>
      <MenuLinkWrap>Explore</MenuLinkWrap>
    </NavLink>
    <NavLink to="/about" exact activeClassName="active" replace>
      <MenuLinkWrap>About</MenuLinkWrap>
    </NavLink>
  </HeaderWrap>
);

export default Header;
