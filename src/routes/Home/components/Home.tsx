import * as React from "react";
import { Route, Link, RouteComponentProps } from "react-router-dom";
import HomePageA from "../HomePageA";
import HomePageB from "../HomePageB";

export interface StateToProps {
  state: {
    home: {
      counter: number;
    };
    location: string;
  };
}
export interface DispatchToProps {
  add: () => void;
  locationChange: () => void;
}
export interface OwnProps extends RouteComponentProps<{ id: number }> {}
export interface HomeProps extends StateToProps, DispatchToProps, OwnProps {}
export interface HomeState {}

export default class Home extends React.Component<HomeProps, HomeState> {
  public render() {
    return (
      <div>
        <h1>Home Page</h1>
        <section>
          <h3>sub-page test:</h3>
          <Link to="/home/page-a" replace>
            Home Page A
          </Link>
          &nbsp;
          <Link to="/home/page-b" replace>
            Home Page B
          </Link>
          <Route path="/home/page-a" exact component={HomePageA()} />
          <Route path="/home/page-b" exact component={HomePageB()} />
        </section>
        <section>
          <h3>redux test: </h3>
          <span>counter: {this.props.state.home.counter}</span>
          <button onClick={() => this.props.add()}>add counter</button>
          <br />
          <span>location: {this.props.state.location}</span>
          <button onClick={() => this.props.locationChange()}>
            change location
          </button>
        </section>
        <section>
          <h3>url params test:</h3>
          <Link to="/home/1" replace>
            Id-1
          </Link>
          &nbsp;
          <Link to="/home/2" replace>
            Id-2
          </Link>
          <div>id: {this.props.match.params.id}</div>
        </section>
      </div>
    );
  }
}
