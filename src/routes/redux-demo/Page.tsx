import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Switch, Route } from "react-router";
import { ReducerKeys } from "../../enum/reducerKeys";
import { StoreService } from "../../services/storeService";
import { Profile } from "./interfaces/profile";
import { reducer, State } from "./store/reducer";
import { updateCounter } from "./store/actions";
import ProfileComponent from "./components/Profile";
import PageA from "./PageA";
import PageB from "./PageB";
import { Link } from "react-router-dom";

StoreService.injectReducer(ReducerKeys.ReduxDemo, reducer);

export interface StateToProps {
  counter: number;
  hello: string;
  friends: string[];
  profile: Profile;
}
export interface DispatchToProps {
  updateCounter: (value: number) => void;
}
export interface PageProps extends StateToProps, DispatchToProps {}
export interface PageState {}

const mapStateToProps = (state: {
  [ReducerKeys.ReduxDemo]: State;
}): StateToProps => {
  const stateReduxDemo = state[ReducerKeys.ReduxDemo];
  return {
    friends: stateReduxDemo.friends,
    profile: stateReduxDemo.profile,
    counter: stateReduxDemo.counter,
    hello: stateReduxDemo.hello,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => {
  return {
    updateCounter: value => dispatch(updateCounter(value)),
  };
};

class Page extends React.Component<PageProps, PageState> {
  public render() {
    return (
      <div>
        <div style={{ padding: "10px 8px" }}>Redux Demo</div>
        <div style={{ padding: "10px 8px" }}>
          <section>
            <h4>Count:</h4>
            <div>
              {this.props.counter}
              &nbsp;
              <button
                onClick={() => this.props.updateCounter(this.props.counter + 1)}
              >
                Add
              </button>
            </div>
          </section>
          <section>
            <h4>Hello: </h4>
            <div>{this.props.hello}</div>
          </section>
          <section>
            <h4>Friends:</h4>
            <div>
              {this.props.friends.map((friend, index) => {
                return (
                  <span key={index}>
                    &nbsp;
                    {friend}
                  </span>
                );
              })}
            </div>
          </section>
          <section>
            <h4>Profile:</h4>
            <ProfileComponent profile={this.props.profile} />
          </section>
        </div>
        <div style={{ padding: "10px 8px" }}>
          <Link to="/redux-demo/page-a">page-a</Link>
          <span> / </span>
          <Link to="/redux-demo/page-b">page-b</Link>
        </div>
        <div style={{ padding: "10px 8px" }}>
          <Switch>
            <Route path="/redux-demo/page-a" component={PageA} />
            <Route path="/redux-demo/page-b" component={PageB} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
