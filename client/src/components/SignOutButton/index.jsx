import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { signOutAsync } from "../../store/sessionSlice";

const SignOutButton = () => {
  const dispatch = useDispatch();
  return <Button onClick={() => dispatch(signOutAsync())}>Sign Out</Button>;
};
export default withRouter(SignOutButton);
