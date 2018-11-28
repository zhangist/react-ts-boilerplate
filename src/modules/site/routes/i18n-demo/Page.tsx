import * as React from "react";
import i18n from "../../../../common/i18n";
import * as App from "../../../../components/app";

export interface PageProps {
  i18nResources: any;
}
export interface PageState {}

export default class Page extends React.Component<PageProps, PageState> {
  constructor(props: PageProps) {
    super(props);

    const { i18nResources } = props;
    i18n.addResources(i18n.language, "i18nDemo", i18nResources);
  }
  public render() {
    return (
      <div>
        <App.Header />
        <App.Content>
          <App.PageTitle>I18n Demo</App.PageTitle>
          <section>i18n demo</section>
        </App.Content>
      </div>
    );
  }
}
