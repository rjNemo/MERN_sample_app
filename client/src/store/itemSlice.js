import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ITEMS_URL } from "./urls";

export const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    getItems: (state, action) => ({
      ...state,
      items: action.payload,
      loading: false,
    }),
    addItem: (state, action) => ({
      ...state,
      items: [action.payload, ...state.items],
    }),
    deleteItem: (state, action) => ({
      ...state,
      items: state.items.filter((i) => i._id !== action.payload),
    }),
    setItemsLoading: (state) => ({ ...state, loading: true }),
  },
});

/**
 * redux-thunk which fetches Items asynchronously from db.
 */
export const getItemsAsync = () => async (dispatch) => {
  dispatch(setItemsLoading);
  const { data } = await axios.get(ITEMS_URL);
  dispatch(getItems(data));
};

/**
 * Creates a new Item in the db.
 */
export const addItemAsync = (name) => async (dispatch) => {
  const { data } = await axios.post(ITEMS_URL, { name });
  dispatch(addItem(data));
};

/**
 * Deletes Item _id from the db.
 */
export const deleteItemAsync = (id) => async (dispatch) => {
  await axios.delete(`${ITEMS_URL}/${id}`);
  dispatch(deleteItem(id));
};

export const {
  getItems,
  addItem,
  deleteItem,
  setItemsLoading,
} = itemSlice.actions;

export const selectItems = (state) => state.item.items;
export default itemSlice.reducer;
