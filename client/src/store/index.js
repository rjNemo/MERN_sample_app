import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";

export default configureStore({
  reducer: {
    item: itemReducer,
  },
});
