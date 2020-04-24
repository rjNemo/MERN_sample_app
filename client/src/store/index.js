import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import sessionReducer from "./sessionSlice";

export default configureStore({
  reducer: {
    item: itemReducer,
    session: sessionReducer,
  },
});
