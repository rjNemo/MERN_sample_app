import React from "react";
import { Container } from "reactstrap";

const useStyles = () => ({
  root: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
});

const LandingPage = () => {
  const styles = useStyles();
  return (
    <Container style={styles.root}>
      <h1>Home Page</h1>
      <p>The Home Page is accessible by everyone.</p>
    </Container>
  );
};
export default LandingPage;
