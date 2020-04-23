import React from "react";
import { Container } from "reactstrap";
import ItemModal from "../ItemModal";
import List from "../List";

export default function AccountPage() {
  return (
    <Container>
      <ItemModal />
      <List />
    </Container>
  );
}
