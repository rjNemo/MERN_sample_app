import React, { useEffect } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  selectItems,
  deleteItemAsync,
  getItemsAsync,
} from "../../store/itemSlice";
import { selectToken } from "../../store/sessionSlice";

const useStyles = () => ({
  removeBtn: {
    marginRight: "0.5rem",
  },
});

export default function List() {
  // useSelector links the component to the store data.
  const items = useSelector(selectItems);
  const token = useSelector(selectToken);
  // useDispatch allows to emit actions.
  const dispatch = useDispatch();

  const styles = useStyles();

  // UseEffect loads items from the db when component renders.
  // Precising dependencies so it doesn't render infinitely.
  useEffect(() => {
    if (token) dispatch(getItemsAsync(token));

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
    // }
    // });
  }, [dispatch, token]);

  return (
    <ListGroup>
      {items.map(({ _id, name }) => (
        <ListGroupItem key={_id}>
          <Button
            style={styles.removeBtn}
            color="danger"
            size="small"
            onClick={() => dispatch(deleteItemAsync(_id, token))}
          >
            &times;
          </Button>
          {name}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
