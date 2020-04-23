import React from "react";
import { Container } from "reactstrap";
import ItemModal from "../../components/ItemModal";
import List from "../../components/List";

export default function AccountPage() {
  return (
    <Container>
      <ItemModal />
      <List />
    </Container>
  );
}
