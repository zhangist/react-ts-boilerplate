import * as React from "react";
import { NavLink } from "react-router-dom";
import { withTranslation, WithTranslation } from "react-i18next";
import styled from "styled-components";
import { I18nNamespaces } from "../../enum/i18nNamespaces";

const HeaderWrapperStyled = styled.div`
  width: 100%;
  height: 48px;
`;

const HeaderStyled = styled.div`
  width: 100%;
  height: 48px;
  line-height: 48px;
  background: #fff;
  position: fixed;
  display: flex;
`;

const MenuListStyled = styled.span`
  display: flex;
`;

const MenuListNarrowStyled = styled.span`
  flex: auto;
  display: none;
  ${MenuListStyled} {
    background: #fff;
    flex-direction: column;
    overflow: auto;
    position: fixed;
    top: 48px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  @media (max-width: 700px) {
    display: block;
  }
`;

const MenuListWideStyled = styled.span`
  @media (max-width: 700px) {
    display: none;
  }
  display: block;
  ${MenuListStyled} {
    flex-direction: row;
  }
`;

const NavLinkStyled = styled.span`
  margin: 0 10px;
  a {
    &.active {
      color: #333;
    }
  }
`;

export interface HeaderProps extends WithTranslation {}
export interface HeaderState {
  isMenuListOpen: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  private bodyOverflow = document.body.style.overflow;

  public constructor(props: HeaderProps) {
    super(props);
    this.state = {
      isMenuListOpen: false,
    };
  }

  public render() {
    const { t } = this.props;
    const { isMenuListOpen } = this.state;
    return (
      <HeaderWrapperStyled>
        <HeaderStyled>
          <NavLinkStyled>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
          </NavLinkStyled>
          <MenuListNarrowStyled>
            <div style={{ height: "100%", display: "flex" }}>
              <div style={{ flex: "auto" }} />
              <div>
                {isMenuListOpen ? (
                  <button onClick={this.closeMenu}>{t("Close Menu")}</button>
                ) : (
                  <button onClick={this.openMenu}>{t("Open Menu")}</button>
                )}
              </div>
              <div style={{ width: "10px" }} />
            </div>
            {isMenuListOpen ? this.renderMenuList() : null}
          </MenuListNarrowStyled>
          <MenuListWideStyled>{this.renderMenuList()}</MenuListWideStyled>
        </HeaderStyled>
      </HeaderWrapperStyled>
    );
  }

  /**
   * render menu list
   */
  private renderMenuList = () => {
    const { t } = this.props;
    return (
      <MenuListStyled>
        <NavLinkStyled>
          <NavLink to="/i18n-demo" activeClassName="active">
            {t("I18n Demo")}
          </NavLink>
        </NavLinkStyled>
        <NavLinkStyled>
          <NavLink to="/pages-demo" activeClassName="active">
            {t("Pages Demo")}
          </NavLink>
        </NavLinkStyled>
        <NavLinkStyled>
          <NavLink to="/redux-demo" activeClassName="active">
            {t("Redux Demo")}
          </NavLink>
        </NavLinkStyled>
        <NavLinkStyled>
          <NavLink to="/url-params-demo" activeClassName="active">
            {t("Url Params Demo")}
          </NavLink>
        </NavLinkStyled>
        <NavLinkStyled>
          <NavLink to="/user" activeClassName="active">
            {t("User")}
          </NavLink>
        </NavLinkStyled>
      </MenuListStyled>
    );
  };

  /**
   * open menu
   */
  private openMenu = () => {
    this.setState({ isMenuListOpen: true });
    document.body.style.overflow = "hidden";
  };

  /**
   * close menu
   */
  private closeMenu = () => {
    document.body.style.overflow = this.bodyOverflow;
    this.setState({ isMenuListOpen: false });
  };
}

export default withTranslation(I18nNamespaces.App)(Header);
