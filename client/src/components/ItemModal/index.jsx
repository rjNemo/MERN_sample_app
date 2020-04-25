import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { addItemAsync } from "../../store/itemSlice";
import { selectToken } from "../../store/sessionSlice";

const useStyles = () => ({
  button: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
});

export default function ItemModal() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const toggle = () => setModal(!modal);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItemAsync(name, token));
    toggle();
  };
  const handleChange = (e) => setName(e.target.value);
  const styles = useStyles();

  return (
    <>
      <Button color="dark" style={styles.button} onClick={toggle}>
        Add Item
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add to list</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="item">Add an Item</Label>
              <Input
                type="text"
                // name="name"
                id="item"
                onChange={handleChange}
              />
              <Button color="dark" style={styles.button} block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
}
