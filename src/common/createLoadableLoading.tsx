import * as React from "react";
import * as Loadable from "react-loadable";
import Loading from "../components/Loading";

export default (props: Loadable.LoadingComponentProps) => {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else {
    return props.pastDelay ? <Loading /> : null;
  }
};
