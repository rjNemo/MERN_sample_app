import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import * as ROUTES from "../../constants/routes";
import { useFirebase } from "../../services/auth";

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

export default function SignUpPage() {
  const styles = useStyles();
  return (
    <Container style={styles.root}>
      <h1>Sign Up</h1>
      <SignUpForm />
    </Container>
  );
}

export const SignUpForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);

  const auth = useFirebase();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signInWithGoogle().then((res) => console.log(res.user));
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
        {error && <p>{error.message}</p>}
      </FormGroup>
    </Form>
  );
};

const InputField = ({ id, label, set, type = "text" }) => {
  const handleChange = (e) => set(e.target.value);

  const styles = useStyles();
  return (
    <div style={styles.inputField}>
      <Label for={id}>{label}</Label>
      <Input type={type} id={id} onChange={handleChange} />
    </div>
  );
};

export const SignUpLink = () => (
  <p>
    Don't have an account yet? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);
