import { createSlice } from "@reduxjs/toolkit";
import { firebase } from "../services/auth";

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
    addAuthUser: (state, action) => {},
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

export const { getAuthUser, getToken, logIn, logOut } = sessionSlice.actions;

export const selectAuthUser = (state) => state.session;
export const selectLoggedIn = (state) => state.session.loggedIn;

export default sessionSlice.reducer;
