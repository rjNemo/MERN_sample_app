import React, { useEffect, useState } from "react";
import { withRouter, Route } from "react-router-dom";
import { useFirebase } from "../services/auth";
import * as ROUTES from "../constants/routes";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAuthUser,
  getAuthUserAsync,
  selectLoggedIn,
} from "../store/sessionSlice";

const PrivateRoute = ({
  component: Component,
  condition,
  path,
  history,
  ...rest
}) => {
  // const [authUser, setAuthUser] = useState(null);
  // const firebase = useFirebase();
  const authUser = useSelector(selectAuthUser);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAuthUserAsync())

    if (!condition(authUser)) {
      history.push(ROUTES.SIGN_IN);
    }
    // else {
    //   setAuthUser(authUser);
    // }
  }, [
    // firebase.auth,
    condition,
    history,
  ]);

  const render = (props) => <Component {...props} />;
  return condition(authUser) ? (
    <Route path={path} render={render} {...rest} />
  ) : null;
};

export default withRouter(PrivateRoute);
