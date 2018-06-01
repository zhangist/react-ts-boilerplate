import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../components/Home";
import { actions } from "../modules/home";
import { locationChange } from "../../../store/location";

const mapStateToProps = (state: any) => {
  return { hello: "hello", state };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    add: () => dispatch(actions.increment()),
    locationChange: () => dispatch(locationChange("/home")),
  };
};

const HomeContainer: any = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default withRouter(HomeContainer);
