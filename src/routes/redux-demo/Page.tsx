import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { StoreService } from "../../services/storeService";
import { reducer, State, REDUCER_KEY } from "./store/reducer";
import { Counter } from "./store/states/counter";
import { Friends } from "./store/states/friends";
import { Hello } from "./store/states/hello";
import { Profile } from "./store/states/profile";
import { updateCounter } from "./store/actions";
import ProfileComponent from "./components/Profile";

StoreService.injectReducer(REDUCER_KEY, reducer);

export interface StateToProps {
  friends: Friends;
  profile: Profile;
  counter: Counter;
  hello: Hello;
}
export interface DispatchToProps {
  updateCounter: (value: number) => void;
}
export interface PageProps extends StateToProps, DispatchToProps {}
export interface PageState {}

const mapStateToProps = (state: { [REDUCER_KEY]: State }): StateToProps => {
  const stateReduxDemo = state[REDUCER_KEY];
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
              <button onClick={() => this.props.updateCounter(this.props.counter + 1)}>Add</button>
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
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
