import * as React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { I18nNamespaces } from "../../enum/i18nNamespaces";
import styles from "./styles.less";

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
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.navLink}>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
          </div>
          <div className={styles.narrow}>
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
          </div>
          <div className={styles.wide}>{this.renderMenuList()}</div>
        </div>
      </div>
    );
  }

  /**
   * render menu list
   */
  private renderMenuList = () => {
    const { t } = this.props;
    return (
      <div className={styles.menuList}>
        <div className={styles.navLink}>
          <NavLink to="/i18n-demo" activeClassName="active">
            {t("I18n Demo")}
          </NavLink>
        </div>
        <div className={styles.navLink}>
          <NavLink to="/pages-demo" activeClassName="active">
            {t("Pages Demo")}
          </NavLink>
        </div>
        <div className={styles.navLink}>
          <NavLink to="/redux-demo" activeClassName="active">
            {t("Redux Demo")}
          </NavLink>
        </div>
        <div className={styles.navLink}>
          <NavLink to="/url-params-demo" activeClassName="active">
            {t("Url Params Demo")}
          </NavLink>
        </div>
        <div className={styles.navLink}>
          <NavLink to="/user" activeClassName="active">
            {t("User")}
          </NavLink>
        </div>
      </div>
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
