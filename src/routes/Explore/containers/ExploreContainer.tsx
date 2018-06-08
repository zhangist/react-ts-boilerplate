import { withRouter } from "react-router-dom";
import { connect, Dispatch } from "react-redux";
import Home, { StateToProps, DispatchToProps } from "../components/Explore";
import * as actions from "../modules/explore/actions";

const mapStateToProps = (state: any): StateToProps => ({ state });

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => {
  return {
    changeValue: (value: string) => dispatch(actions.explore(value)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home),
);
