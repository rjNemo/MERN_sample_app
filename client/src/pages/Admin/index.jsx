import React from "react";
import { Container } from "reactstrap";

const styles = {
  root: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
};
export default function AdminPage() {
  return (
    <Container style={styles.root}>
      <h1>Admin</h1>
      <p>Restricted area! Only users with the admin role are authorized.</p>
    </Container>
  );
}
