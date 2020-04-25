import React, { useEffect } from "react";
import { withRouter, Route } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { useSelector } from "react-redux";
import { selectAuthUser } from "../store/sessionSlice";

const PrivateRoute = ({
  component: Component,
  condition,
  path,
  history,
  ...rest
}) => {
  const authUser = useSelector(selectAuthUser);

  useEffect(() => {
    if (!condition(authUser)) {
      history.push(ROUTES.SIGN_IN);
    }
  }, [condition, history, authUser]);

  const render = (props) => <Component {...props} />;
  return condition(authUser) ? (
    <Route path={path} render={render} {...rest} />
  ) : null;
};

export default withRouter(PrivateRoute);
