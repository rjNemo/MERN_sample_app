import React from "react";
import { Container } from "reactstrap";
import ItemModal from "../../components/ItemModal";
import List from "../../components/List";

const useStyles = () => ({
  root: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
});

const AppPage = () => {
  const styles = useStyles();
  return (
    <Container style={styles.root}>
      <ItemModal />
      <List />
    </Container>
  );
};
export default AppPage;
