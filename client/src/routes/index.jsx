import React from "react";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import * as CONDITIONS from "../constants/authConditions";
import PrivateRoute from "../routes/PrivateRoute";
import AppPage from "../pages/App";
import LandingPage from "../pages/Landing";
import SignUpPage from "../pages/SignUp";
import SignInPage from "../pages/SignIn";
import PasswordForgetPage from "../pages/PasswordForget";
import AccountPage from "../pages/Account";
import AdminPage from "../pages/Admin";

export default function MainRouter() {
  return (
    <Switch>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <PrivateRoute
        path={ROUTES.APP}
        condition={CONDITIONS.AUTHENTICATED}
        component={AppPage}
      />
      <PrivateRoute
        path={ROUTES.ACCOUNT}
        condition={CONDITIONS.AUTHENTICATED}
        component={AccountPage}
      />
      <PrivateRoute
        path={ROUTES.ADMIN}
        condition={CONDITIONS.ADMIN}
        component={AdminPage}
      />
    </Switch>
  );
}
