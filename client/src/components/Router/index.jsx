import React from "react";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {
  LandingPage,
  SignUpPage,
  SignInPage,
  PasswordForgetPage,
  AppPage,
  AccountPage,
  AdminPage,
} from "../../pages/index";

export default function MainRouter() {
  return (
    <Switch>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.APP} component={AppPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </Switch>
  );
}
