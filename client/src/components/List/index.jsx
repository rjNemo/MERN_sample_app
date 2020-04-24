import React, { useEffect } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  selectItems,
  deleteItemAsync,
  getItemsAsync,
} from "../../store/itemSlice";
import { useFirebase } from "../../services/auth";

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
  const firebase = useFirebase();
  // UseEffect loads items from the db when component renders.
  // Precising dependencies so it doesn't render infinitely.
  useEffect(() => {
    firebase.auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await firebase.auth.currentUser.getIdToken();
        dispatch(getItemsAsync(token));

        // push to authslice ...
        //import axios from "axios";
        // import * as URL from "../../constants/urls";
        // const u = await firebase.auth.currentUser;
        // console.log(u);
        // await axios.post(
        //   URL.USERS,
        //   {
        //     username: u.displayName,
        //     email: u.email,
        //     roles: {
        //       ADMIN: true,
        //     },
        //     photoUrl: u.photoURL,
        //     phoneNumber: u.phoneNumber,
        //   },
        //   {
        //     headers: {
        //       authorization: `Bearer ${token}`,
        //     },
        //   }
        // );
      }
    });
  }, [dispatch, firebase.auth]);

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
