import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ReducerState as ExploreReducerState } from "../modules/explore/reducer";
import Test from "./Test";

export interface StateToProps {
  state: {
    explore: {
      value: ExploreReducerState["value"];
    };
  };
}
export interface DispatchToProps {
  changeValue: (value: string) => void;
}
export interface OwnProps extends RouteComponentProps<{}> {}
export interface ExploreProps extends StateToProps, DispatchToProps, OwnProps {}

export default class Explore extends React.Component<ExploreProps, any> {
  public state = {
    value: "",
  };

  public render() {
    return (
      <div>
        <h1>Explore Page</h1>
        <p>Explore page content.</p>
        (redux) props.state.explore.value:{" "}
        <input
          value={this.props.state.explore.value}
          onChange={this.handleExploreValueChange}
        />
        <Test value={this.state.value} changeValue={this.changeValue} />
      </div>
    );
  }

  private handleExploreValueChange = (e: any) => {
    this.props.changeValue(e.target.value);
  };

  private changeValue = (value: string) => {
    this.setState({ value });
  };
}
