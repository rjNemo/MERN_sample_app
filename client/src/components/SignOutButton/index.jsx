import React from "react";
import { Button } from "reactstrap";
import { useFirebase } from "../../services/auth";

const SignOutButton = () => {
  const auth = useFirebase();
  return <Button onClick={auth.signOut}>Sign Out</Button>;
};
export default SignOutButton;
