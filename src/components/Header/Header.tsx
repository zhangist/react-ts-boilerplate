import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { translate, TranslationFunction } from "react-i18next";

const HeaderWrap = styled.div`
  height: 48px;
  line-height: 48px;
  background: #fff;
`;

const LogoWrap = styled.span`
  margin: 0 10px;
  a {
    color: #333;
  }
`;

const MenuLinkWrap = styled.span`
  margin: 0 10px;
  .active {
    color: #333;
  }
`;

export interface HeaderProps {
  t: TranslationFunction;
}

const Header = ({ t }: HeaderProps) => (
  <HeaderWrap>
    <LogoWrap>
      <NavLink to="/" exact activeClassName="active">
        React-ts-boilerplate
      </NavLink>
    </LogoWrap>
    <MenuLinkWrap>
      <NavLink to="/page" activeClassName="active">
        {t("Page")}
      </NavLink>
    </MenuLinkWrap>
    <MenuLinkWrap>
      <NavLink to="/explore" activeClassName="active">
        {t("Explore")}
      </NavLink>
    </MenuLinkWrap>
    <MenuLinkWrap>
      <NavLink to="/about" activeClassName="active">
        {t("About")}
      </NavLink>
    </MenuLinkWrap>
  </HeaderWrap>
);

export default translate("app")(Header);
