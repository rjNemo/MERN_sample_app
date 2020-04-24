import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import * as ROUTES from "../../constants/routes";
import PasswordForgetForm from "../../components/PasswordForgetForm";

const useStyles = () => ({
  root: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
});

const PasswordForgetPage = () => {
  const styles = useStyles();

  return (
    <Container style={styles.root}>
      <h1>Password Forget</h1>
      <PasswordForgetForm />
    </Container>
  );
};

export const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;
