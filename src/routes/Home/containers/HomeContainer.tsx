import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProps = (state: any) => {
  return { hello: "hello", state };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

const HomeContainer: any = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default withRouter(HomeContainer);
