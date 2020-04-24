import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Container } from "reactstrap";
import { useFirebase } from "../../services/auth";
import * as ROUTES from "../../constants/routes";
import InputField from "../../components/InputField";

const useStyles = () => ({
  root: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  button: {
    marginTop: "1rem",
    marginBottom: "1rem",
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

const PasswordForgetForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const auth = useFirebase();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .resetPassword(email)
      .then(() => {
        setEmail("");
        setError(null);
      })
      .catch((err) => setError(err));
  };

  const isInvalid = email === "";
  const styles = useStyles();

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputField
          label="Email Address"
          id="email"
          set={setEmail}
          type="email"
        />
        <Button
          color="dark"
          style={styles.button}
          disabled={isInvalid}
          block
          type="submit"
        >
          Reset my Password
        </Button>
        {error && <p>{error.message}</p>}
      </FormGroup>
    </Form>
  );
};

export const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;
