import { withRouter } from "react-router-dom";
import { connect, Dispatch } from "react-redux";
import Home, { HomeProps } from "../components/Home";
import { actions } from "../modules/home";
import { locationChange } from "../../../store/location";

interface StateToProps {
  state: HomeProps["state"];
}

interface DispatchToProps {
  add: HomeProps["add"];
  locationChange: HomeProps["locationChange"];
}

const mapStateToProps = (state: any): StateToProps => ({ state });

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => {
  return {
    add: () => dispatch(actions.increment()),
    locationChange: () => dispatch(locationChange("/home")),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home),
);
