import React, { useState } from "react";
import { Button, Form, FormGroup } from "reactstrap";
import { useFirebase } from "../../services/auth";
import InputField from "../../components/InputField";

const useStyles = () => ({
  button: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
});

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

export default PasswordForgetForm;
