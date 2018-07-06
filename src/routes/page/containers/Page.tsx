import * as React from "react";
import { withRouter } from "react-router-dom";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { increment } from "../store/page/actions";
import { RouteComponentProps } from "react-router-dom";
import i18n from "../../../common/i18n";
import { locationChange } from "../../../store/actions";
import * as Styled from "../../../components/Styled";
import HomeMenu from "../components/HomeMenu";
import ReduxTest from "../components/ReduxTest";
import UrlParamsTest from "../components/UrlParamsTest";

export { default as reducer } from "../store/page/reducer";

interface StateToProps {
  state: {
    page: {
      counter: number;
    };
    location: string;
  };
}
interface DispatchToProps {
  add: () => void;
  locationChange: () => void;
}
interface OwnProps extends RouteComponentProps<{ id: number }> {
  i18nResources: any;
}
interface HomeProps extends StateToProps, DispatchToProps, OwnProps {}
interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);

    const { i18nResources } = props;
    i18n.addResources(i18n.language, "page", i18nResources);
  }
  public render() {
    return (
      <Styled.Content>
        <Styled.PageTitle>Page</Styled.PageTitle>
        <section>
          <HomeMenu />
        </section>
        <section>
          <ReduxTest
            counter={this.props.state.page.counter}
            location={this.props.state.location}
            add={this.props.add}
            locationChange={this.props.locationChange}
          />
        </section>
        <section>
          <UrlParamsTest id={this.props.match.params.id} />
        </section>
      </Styled.Content>
    );
  }
}

const mapStateToProps = (state: any): StateToProps => ({ state });
const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => {
  return {
    add: () => dispatch(increment()),
    locationChange: () => dispatch(locationChange("/home")),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home),
);
