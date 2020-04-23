import React, { useEffect } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  selectItems,
  deleteItemAsync,
  getItemsAsync,
} from "../../store/itemSlice";

const useStyles = () => ({
  removeBtn: {
    marginRight: "0.5rem",
  },
});

export default function List() {
  // useSelector links the component to the store data.
  const items = useSelector(selectItems);
  // useDispatch allows to emit actions.
  const dispatch = useDispatch();

  const styles = useStyles();

  // UseEffect loads items from the db when component renders.
  // Precising dependencies so it doesn't render infinitely.
  useEffect(() => {
    dispatch(getItemsAsync());
  }, [dispatch]);

  return (
    <ListGroup>
      {items.map(({ _id, name }) => (
        <ListGroupItem key={_id}>
          <Button
            style={styles.removeBtn}
            color="danger"
            size="small"
            onClick={() => dispatch(deleteItemAsync(_id))}
          >
            &times;
          </Button>
          {name}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
