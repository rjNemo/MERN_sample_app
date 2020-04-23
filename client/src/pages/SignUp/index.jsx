import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Container } from "reactstrap";
import * as ROUTES from "../../constants/routes";
import { useFirebase } from "../../services/auth";
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
  const [error, setError] = useState(null);

  const auth = useFirebase();

  const cleanFields = () => {
    setUserName("");
    setEmail("");
    setPassword1("");
    setPassword2("");
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password1)
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
        <Button color="light" style={styles.button} block onClick={handleClick}>
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
