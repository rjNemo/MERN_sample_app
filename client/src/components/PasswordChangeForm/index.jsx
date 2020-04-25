import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup } from "reactstrap";
import InputField from "../InputField";
import { updatePasswordAsync, selectError } from "../../store/sessionSlice";

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

const PasswordChangeForm = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword1("");
    setPassword2("");
    dispatch(updatePasswordAsync(password1));
  };

  const isInvalid = password1 === password2 || password1 === "";

  const styles = useStyles();

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputField
          label="New Password"
          id="password1"
          set={setPassword1}
          type="password"
        />
        <InputField
          label="Confirm New Password"
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
          Reset my Password
        </Button>
        {error && <p>{error.message}</p>}
      </FormGroup>
    </Form>
  );
};

export default PasswordChangeForm;
