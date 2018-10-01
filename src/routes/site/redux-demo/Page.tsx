import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import store from "../../../common/store";
import injectReducer from "../../../common/injectReducer";
import reducer, { IReduxState, ReduxState } from "./store/reducer";
import { updateCounter } from "./store/actions";
import Profile from "./components/Profile";
import * as App from "../../../components/app";

// inject reducer
if (!store.asyncReducers || !store.asyncReducers["site_reduxDemo"]) {
  injectReducer(store, { key: "site_reduxDemo", reducer });
}

export interface StateToProps {
  counter: IReduxState["counter"];
  friends: IReduxState["friends"];
  hello: IReduxState["hello"];
  profile: IReduxState["profile"];
}
export interface DispatchToProps {
  updateCounter: (value: number) => void;
}
export interface OwnProps {}
export interface PageProps extends StateToProps, DispatchToProps, OwnProps {}
export interface PageState {}

const mapStateToProps = (state: Map<"site_reduxDemo", ReduxState>): StateToProps => ({
  counter: (state.get("site_reduxDemo") as ReduxState).get("counter") as IReduxState["counter"],
  friends: (state.get("site_reduxDemo") as ReduxState).get("friends") as IReduxState["friends"],
  hello: (state.get("site_reduxDemo") as ReduxState).get("hello") as IReduxState["hello"],
  profile: (state.get("site_reduxDemo") as ReduxState).get("profile") as IReduxState["profile"],
});
const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => {
  return {
    updateCounter: value => dispatch(updateCounter(value)),
  };
};

class Page extends React.Component<PageProps, PageState> {
  public render() {
    return (
      <div>
        <App.Header />
        <App.Content>
          <App.PageTitle>Redux Demo</App.PageTitle>
          <div>
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
              <Profile profile={this.props.profile} />
            </section>
          </div>
        </App.Content>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
