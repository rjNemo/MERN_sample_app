import { createSlice } from "@reduxjs/toolkit";
import { v1 } from "uuid";
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
      items: [...state.items, { id: v1(), name: action.payload }],
    }),
    deleteItem: (state, action) => ({
      ...state,
      items: state.items.filter((i) => i.id !== action.payload),
    }),
    setItemsLoading: (state) => ({ ...state, loading: true }),
  },
});

export const getItemsAsync = () => async (dispatch) => {
  dispatch(setItemsLoading);
  const { data } = await axios.get(ITEMS_URL);
  dispatch(getItems(data));
};

export const {
  getItems,
  addItem,
  deleteItem,
  setItemsLoading,
} = itemSlice.actions;

export const selectItems = (state) => state.item.items;
export default itemSlice.reducer;
