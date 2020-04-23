import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Container } from "reactstrap";
import { useFirebase } from "../../services/auth";
import { SignUpLink } from "../SignUp";
import InputField from "../../components/InputField";
import * as ROUTES from "../../constants/routes";

const useStyles = () => ({
  root: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  inputField: {
    paddingBottom: "1rem",
  },
  button: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
});

/**
 * page's layout
 */
export default function SignInPage() {
  const styles = useStyles();
  return (
    <Container style={styles.root}>
      <h1>Sign In</h1>
      <SignInForm />
      <SignUpLink />
    </Container>
  );
}

const SignInFormBase = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const auth = useFirebase();

  const cleanFields = () => {
    setEmail("");
    setPassword("");
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    auth
      .signinWithEmailAndPassword(email, password)
      .then(() => {
        cleanFields();
        props.history.push(ROUTES.APP);
      })
      .catch((err) => setError(err));
  };

  const handleClick = (e) => {
    e.preventDefault();
    auth
      .signInWithGoogle()
      .then(() => {
        cleanFields();
        props.history.push(ROUTES.APP);
      })
      .catch((err) => setError(err));
  };

  const isInvalid = email === "" || password === "";

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
        <InputField
          label="Password"
          id="password"
          set={setPassword}
          type="password"
        />
        <Button
          color="dark"
          style={styles.button}
          disabled={isInvalid}
          block
          type="submit"
        >
          Sign In
        </Button>
        <Button color="light" style={styles.button} block onClick={handleClick}>
          Sign In with Google
        </Button>
        {error && <p>{error.message}</p>}
      </FormGroup>
    </Form>
  );
};

/**
 * Sign In form final component. withRouter allows redirections.
 */
export const SignInForm = withRouter(SignInFormBase);
