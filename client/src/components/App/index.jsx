import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useFirebase } from "../../services/auth";
import MainNavbar from "../MainNavbar";
import MainRouter from "../Router";

const App = () => {
  // for testing only. Transfer Session to store.
  const [authUser, setAuthUser] = useState(null);
  const firebase = useFirebase();

  useEffect(() => {
    firebase.auth.onAuthStateChanged((authUser) =>
      authUser ? setAuthUser(authUser) : setAuthUser(null)
    );
  }, [firebase.auth]);

  return (
    <Router>
      <MainNavbar authUser={authUser} />
      <MainRouter />
    </Router>
  );
};

export default App;
