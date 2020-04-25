import { createSlice } from "@reduxjs/toolkit";
import { firebase } from "../services/auth";
import * as ROUTES from "../constants/routes";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    username: "",
    email: "",
    photoURL: "",
    phoneNumber: "",
    roles: {},
    token: "",
    loggedIn: false,
    error: null,
  },
  reducers: {
    getAuthUser: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    getToken: (state, action) => ({
      ...state,
      token: action.payload,
    }),
    logIn: (state) => ({
      ...state,
      loggedIn: true,
    }),
    logOut: (state) => ({
      ...state,
      loggedIn: false,
    }),
    newError: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
});

/**
 * Use Auth provider to get credentials
 */
export const getAuthUserAsync = () => async (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const newUser = {
        username: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber,
        loggedIn: true,
        error: null,
      };
      dispatch(getAuthUser(newUser));
    } else {
      dispatch(logOut);
    }
  });
};

/**
 * Use auth provider to get jwt token to access backend
 */
export const getTokenAsync = () => async (dispatch) => {
  const token = await firebase.auth().currentUser.getIdToken();
  dispatch(getToken(token));
};

/**
 * Create auth user with email and password
 */
export const createAuthUserAsync = (email, password, props) => async (
  dispatch
) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => props.history.push(ROUTES.APP))
    .catch((err) => dispatch(newError(err)));
};

/**
 * Sign in with email and password
 */
export const signInAsync = (email, password, props) => async (dispatch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch(logIn());
      props.history.push(ROUTES.APP);
    })
    .catch((err) => dispatch(newError(err)));
};

/**
 * Sign out
 */
export const signOutAsync = () => async (dispatch) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(logOut());
    });
};

export const resetPasswordAsync = (email) => async (dispatch) => {
  firebase.auth().sendPasswordResetEmail(email);
};

export const updatePasswordAsync = (password) => async (dispatch) => {
  firebase.auth().currentUser.updatePassword(password);
};

/**
 * Create auth user with google
 */
export const createAuthUserWithGoogleAsync = (props) => async (dispatch) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    // signInWithRedirect(this.provider);
    .signInWithPopup(provider)
    .then(() => props.history.push(ROUTES.APP))
    .catch((err) => dispatch(newError(err)));
};

// actions
export const {
  getAuthUser,
  createAuthUser,
  getToken,
  logIn,
  logOut,
  newError,
} = sessionSlice.actions;

// selectors
export const selectAuthUser = (state) => state.session;
export const selectLoggedIn = (state) => state.session.loggedIn;
export const selectToken = (state) => state.session.token;
export const selectError = (state) => state.session.error;

// reducer
export default sessionSlice.reducer;
