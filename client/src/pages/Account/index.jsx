import React from "react";
import { Container } from "reactstrap";
import PasswordChangeForm from "../../components/PasswordChangeForm";
import PasswordForgetForm from "../../components/PasswordForgetForm";

const styles = {
  root: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
};

const AccountPage = () => {
  return (
    <Container style={styles.root}>
      <h1>Account</h1>
      <h2>Forgot your password?</h2>
      <PasswordForgetForm />
      <h2>Change your password</h2>
      <PasswordChangeForm />
    </Container>
  );
};

export default AccountPage;
