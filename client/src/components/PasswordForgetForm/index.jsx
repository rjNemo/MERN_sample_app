import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup } from "reactstrap";
import InputField from "../../components/InputField";
import { resetPasswordAsync, selectError } from "../../store/sessionSlice";

const useStyles = () => ({
  button: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
});

const PasswordForgetForm = () => {
  const [email, setEmail] = useState("");
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    dispatch(resetPasswordAsync(email));
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
