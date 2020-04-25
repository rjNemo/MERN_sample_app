import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainNavbar from "../MainNavbar";
import MainRouter from "../../routes";

const App = () => {
  return (
    <Router>
      <MainNavbar />
      <MainRouter />
    </Router>
  );
};

export default App;
