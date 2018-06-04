import * as React from "react";
import { Route, Link, RouteComponentProps } from "react-router-dom";
import HomePageA from "../HomePageA";
import HomePageB from "../HomePageB";

export interface HomeProps extends RouteComponentProps<{}> {
  state: {
    home: {
      counter: number;
    };
    location: string;
  };
  add: () => void;
  locationChange: () => void;
}

export interface HomeState {}

export default class Home extends React.Component<HomeProps, HomeState> {
  public render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/home/page-a" replace>
          Home Page A
        </Link>
        <Link to="/home/page-b" replace>
          Home Page B
        </Link>
        <Route path="/home/page-a" exact component={HomePageA()} />
        <Route path="/home/page-b" exact component={HomePageB()} />
        <div>
          <h3>redux test: </h3>
          <span>counter: {this.props.state.home.counter}</span>
          <button onClick={() => this.props.add()}>add counter</button>
          <br />
          <span>location: {this.props.state.location}</span>
          <button onClick={() => this.props.locationChange()}>
            change location
          </button>
        </div>
      </div>
    );
  }
}
