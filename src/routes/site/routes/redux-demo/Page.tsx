import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import injectReducer from "../../../../common/injectReducer";
import reducer, { State } from "./store/reducer";
import { Counter } from "./store/states/counter";
import { Friends } from "./store/states/friends";
import { Hello } from "./store/states/hello";
import { Profile } from "./store/states/profile";
import { updateCounter } from "./store/actions";
import ProfileComponent from "./components/Profile";
import * as App from "../../../../components/app";

// inject reducer
injectReducer({ key: "site_reduxDemo", reducer });

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

const mapStateToProps = (state: { site_reduxDemo: State }): StateToProps => {
  const reduxDemo = state.site_reduxDemo;
  return {
    friends: reduxDemo.friends,
    profile: reduxDemo.profile,
    counter: reduxDemo.counter,
    hello: reduxDemo.hello,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => {
  return {
    updateCounter: value => dispatch(updateCounter(value)),
  };
};

class Page extends React.Component<PageProps, PageState> {
  public componentWillReceiveProps(nextProps: PageProps) {
    const thisProps = this.props;
    if (nextProps.profile === thisProps.profile) {
      console.log(111);
    }
  }
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
              <ProfileComponent profile={this.props.profile} />
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
