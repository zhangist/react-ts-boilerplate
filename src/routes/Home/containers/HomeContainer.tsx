import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../components/Home";
import { actions } from "../modules/home";

const mapStateToProps = (state: any) => {
  return { hello: "hello", state };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    add: () => dispatch(actions.increment()),
  };
};

const HomeContainer: any = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default withRouter(HomeContainer);
