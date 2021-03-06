import * as firebase from "firebase/app";
// import "firebase/firestore";
import "firebase/auth";
import config from "./config.json";

const CONFIG = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId,
};

// Firebase initializes the Application and provides method to interact with
// Firebase services as auth and firestore.
export default class Firebase {
  constructor() {
    // firebase.initializeApp(CONFIG);
    this.auth = firebase.auth();
  }

  provider = new firebase.auth.GoogleAuthProvider();

  signInWithGoogle = () =>
    this.auth
      // signInWithRedirect(this.provider);
      .signInWithPopup(this.provider);

  createUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signinWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  resetPassword = (email) => this.auth.sendPasswordResetEmail(email);

  updatePassword = (password) => this.auth.currentUser.updatePassword(password);

  // getAuthState = async () =>
  //   this.auth.onAuthStateChanged((authUser) =>
  //     authUser ? setAuthUser(authUser) : setAuthUser(null)
  //   );
}

firebase.initializeApp(CONFIG);

export { firebase };
