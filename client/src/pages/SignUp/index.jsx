import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Container } from "reactstrap";
import * as ROUTES from "../../constants/routes";
import InputField from "../../components/InputField";
import {
  createAuthUserAsync,
  createAuthUserWithGoogleAsync,
  selectError,
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
 * Page's layout
 */
export default function SignUpPage() {
  const styles = useStyles();
  return (
    <Container style={styles.root}>
      <h1>Sign Up</h1>
      <SignUpForm />
    </Container>
  );
}

/**
 * Holds the form state and validates the form. TODO: use an alert to display errors.
 */
const SignUpFormBase = (props) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAuthUserAsync(email, password1, props));
  };

  const loginWithGoogle = (e) => {
    e.preventDefault();
    dispatch(createAuthUserWithGoogleAsync(props));
  };

  const isInvalid =
    password1 !== password2 ||
    password1 === "" ||
    userName === "" ||
    email === "";

  const styles = useStyles();

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputField label="Full Name" id="username" set={setUserName} />
        <InputField
          label="Email Address"
          id="email"
          set={setEmail}
          type="email"
        />
        <InputField
          label="Password"
          id="password1"
          set={setPassword1}
          type="password"
        />
        <InputField
          label="Confirm Password"
          id="password2"
          set={setPassword2}
          type="password"
        />
        <Button
          color="dark"
          style={styles.button}
          disabled={isInvalid}
          block
          type="submit"
        >
          Sign Up
        </Button>
        <Button
          color="light"
          style={styles.button}
          block
          onClick={loginWithGoogle}
        >
          Sign Up with Google
        </Button>
        {error && <p>{error.message}</p>}
      </FormGroup>
    </Form>
  );
};

/**
 * Sign Up form final component. withRouter allows redirections.
 */
export const SignUpForm = withRouter(SignUpFormBase);

export const SignUpLink = () => (
  <p>
    Don't have an account yet? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);
