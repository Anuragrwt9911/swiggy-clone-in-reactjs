import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions; //export actions -> we destrcuture these actions from cartSlice,actions object.
export default cartSlice.reducer; //export reducers --> always export by default  which are exporting a single reducer which is combined version of all reducers mention in creatSlice .
