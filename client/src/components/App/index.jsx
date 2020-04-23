import React from "react";
import { Container } from "reactstrap";
import ItemModal from "../ItemModal";
import List from "../List";
import MainNavbar from "../Navbar";

function App() {
  return (
    <>
      <MainNavbar />
      <Container>
        <ItemModal />
        <List />
      </Container>
    </>
  );
}

export default App;
