import React, { useEffect } from "react";
import { withRouter, Route } from "react-router-dom";
import { useFirebase } from "../services/auth";
import * as ROUTES from "../constants/routes";

const PrivateRoute = ({
  component: Component,
  condition,
  path,
  history,
  ...rest
}) => {
  const firebase = useFirebase();
  let render = null;
  useEffect(() => {
    firebase.auth.onAuthStateChanged((authUser) => {
      if (!condition(authUser)) {
        history.push(ROUTES.SIGN_IN);
      } else {
        // render = condition(authUser)
        //   ? (props) => <Component {...props} />
        //   : null;
      }
    });
  }, [firebase.auth, condition, history]);
  render = (props) => <Component {...props} />;

  return <Route path={path} render={render} {...rest} />;
};

export default withRouter(PrivateRoute);
