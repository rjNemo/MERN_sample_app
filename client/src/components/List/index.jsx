import React, { useEffect } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectItems, deleteItem, getItemsAsync } from "../../store/itemSlice";

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
  }, [dispatch, getItemsAsync]);

  return (
    <ListGroup>
      {items.map(({ id, name }) => (
        <ListGroupItem key={id}>
          <Button
            style={styles.removeBtn}
            color="danger"
            size="small"
            onClick={() => dispatch(deleteItem(id))}
          >
            &times;
          </Button>
          {name}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
