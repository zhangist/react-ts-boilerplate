import { withRouter } from "react-router-dom";
import { connect, Dispatch } from "react-redux";
import Home, { StateToProps, DispatchToProps } from "../components/Home";
import { increment } from "../modules/home/actions";
import { locationChange } from "../../../store/location";

const mapStateToProps = (state: any): StateToProps => ({ state });

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => {
  return {
    add: () => dispatch(increment()),
    locationChange: () => dispatch(locationChange("/home")),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home),
);
