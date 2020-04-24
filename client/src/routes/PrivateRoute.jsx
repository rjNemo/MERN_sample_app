import React, { useEffect, useState } from "react";
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
  const [authUser, setAuthUser] = useState(null);
  const firebase = useFirebase();

  useEffect(() => {
    firebase.auth.onAuthStateChanged((authUser) => {
      if (!condition(authUser)) {
        history.push(ROUTES.SIGN_IN);
      } else {
        setAuthUser(authUser);
      }
    });
  }, [firebase.auth, condition, history]);

  const render = (props) => <Component {...props} />;
  return authUser ? <Route path={path} render={render} {...rest} /> : null;
};

export default withRouter(PrivateRoute);
