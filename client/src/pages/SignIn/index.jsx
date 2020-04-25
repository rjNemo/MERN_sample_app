import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Container } from "reactstrap";
import { SignUpLink } from "../SignUp";
import InputField from "../../components/InputField";
import { PasswordForgetLink } from "../PasswordForget";
import {
  signInAsync,
  selectError,
  createAuthUserWithGoogleAsync,
} from "../../store/sessionSlice";

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

/**
 * page's layout
 */
export default function SignInPage() {
  const styles = useStyles();
  return (
    <Container style={styles.root}>
      <h1>Sign In</h1>
      <SignInForm />
      <PasswordForgetLink />
      <SignUpLink />
    </Container>
  );
}

const SignInFormBase = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInAsync(email, password, props));
  };

  const loginWithGoogle = (e) => {
    e.preventDefault();
    dispatch(createAuthUserWithGoogleAsync(props));
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
        <Button
          color="light"
          style={styles.button}
          block
          onClick={loginWithGoogle}
        >
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
