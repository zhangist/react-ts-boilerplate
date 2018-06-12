import * as React from "react";
import { withRouter } from "react-router-dom";
import { connect, Dispatch } from "react-redux";
import { increment } from "../store/home/actions";
import { RouteComponentProps } from "react-router-dom";
import { locationChange } from "../../../store/actions";
import * as Styled from "../../../components/Styled";
import HomeMenu from "../components/HomeMenu";
import ReduxTest from "../components/ReduxTest";
import UrlParamsTest from "../components/UrlParamsTest";

export { default as reducer } from "../store/home/reducer";

interface StateToProps {
  state: {
    home: {
      counter: number;
    };
    location: string;
  };
}
interface DispatchToProps {
  add: () => void;
  locationChange: () => void;
}
interface OwnProps extends RouteComponentProps<{ id: number }> {}
interface HomeProps extends StateToProps, DispatchToProps, OwnProps {}
interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  public render() {
    return (
      <Styled.Content>
        <Styled.PageTitle>Home Page</Styled.PageTitle>
        <section>
          <HomeMenu />
        </section>
        <section>
          <ReduxTest
            counter={this.props.state.home.counter}
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
