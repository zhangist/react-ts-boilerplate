import * as React from "react";
import * as Cookies from "js-cookie";
import { withTranslation, WithTranslation } from "react-i18next";

enum LanguageTypes {
  en = "en",
  zh_cn = "zh-cn",
}

export interface PageProps extends WithTranslation {}
export interface PageState {}

class Page extends React.Component<PageProps, PageState> {
  public render() {
    const { t } = this.props;
    return (
      <div>
        <div style={{ padding: "10px 8px" }}>I18n Demo</div>
        <div style={{ padding: "10px 8px" }}>{t("Hello!")}</div>
        <div style={{ padding: "10px 8px" }}>
          <a href="javascript:void;" onClick={() => this.changeLanguage(LanguageTypes.en)}>
            en
          </a>
          &nbsp;
          <a href="javascript:void;" onClick={() => this.changeLanguage(LanguageTypes.zh_cn)}>
            zh-cn
          </a>
        </div>
      </div>
    );
  }

  private changeLanguage = (lng: LanguageTypes) => {
    Cookies.set("lng", lng, { expires: 999999 });
    location.reload();
  };
}

export default withTranslation("i18nDemo")(Page);
