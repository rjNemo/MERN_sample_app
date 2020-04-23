import React from "react";
import { Label, Input } from "reactstrap";

const useStyles = () => ({
  inputField: {
    paddingBottom: "1rem",
  },
});

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

export default InputField;
