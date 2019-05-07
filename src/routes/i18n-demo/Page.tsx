import * as React from "react";
import * as Cookies from "js-cookie";
import { withTranslation, WithTranslation } from "react-i18next";
import { I18nNamespaces } from "../../enum/i18nNamespaces";
import { I18nService } from "../../services/i18nService";
import Loading from "../../components/Loading";

enum LanguageTypes {
  en = "en",
  zh_cn = "zh-cn",
}

export interface PageProps extends WithTranslation {}
export interface PageState {}

class Page extends React.Component<PageProps, PageState> {
  public async componentDidMount() {
    if (!I18nService.hasResourceBundle(I18nNamespaces.I18nDemo)) {
      try {
        console.log("load i18n");
        await I18nService.addResourceBundle(I18nNamespaces.I18nDemo);
      } catch (error) {
      } finally {
        this.forceUpdate();
      }
    }
  }

  public render() {
    if (!I18nService.hasResourceBundle(I18nNamespaces.I18nDemo)) {
      return <Loading />;
    }

    const { t } = this.props;
    return (
      <div>
        <div style={{ padding: "10px 8px" }}>I18n Demo</div>
        <div style={{ padding: "10px 8px" }}>{t("Hello!")}</div>
        <div style={{ padding: "10px 8px" }}>
          <a
            href="javascript:void;"
            onClick={() => this.changeLanguage(LanguageTypes.en)}
          >
            en
          </a>
          &nbsp;
          <a
            href="javascript:void;"
            onClick={() => this.changeLanguage(LanguageTypes.zh_cn)}
          >
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

export default withTranslation(I18nNamespaces.I18nDemo)(Page);
