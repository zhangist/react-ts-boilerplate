import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as actions from "../store/explore/actions";
import * as Styled from "../../../components/Styled";
import Test from "../components/Test";

export { default as reducer } from "../store/explore/reducer";

interface StateToProps {
  state: {
    explore: {
      value: string;
    };
  };
}
interface DispatchToProps {
  changeValue: (value: string) => void;
}
interface OwnProps extends RouteComponentProps<{}> {}
interface ExploreProps extends StateToProps, DispatchToProps, OwnProps {}

class Explore extends React.Component<ExploreProps, any> {
  public state = {
    value: "",
  };

  public render() {
    return (
      <Styled.Content>
        <Styled.PageTitle>Explore Page</Styled.PageTitle>
        <p>Explore page content.</p>
        (redux) props.state.explore.value:{" "}
        <input
          value={this.props.state.explore.value}
          onChange={this.handleExploreValueChange}
        />
        <Test value={this.state.value} changeValue={this.changeValue} />
      </Styled.Content>
    );
  }

  private handleExploreValueChange = (e: any) => {
    this.props.changeValue(e.target.value);
  };

  private changeValue = (value: string) => {
    this.setState({ value });
  };
}

const mapStateToProps = (state: any): StateToProps => ({ state });
const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => {
  return {
    changeValue: (value: string) => dispatch(actions.explore(value)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Explore),
);
