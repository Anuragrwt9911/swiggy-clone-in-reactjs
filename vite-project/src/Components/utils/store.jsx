import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
//cartSlice has reducer which are export by default that's why we have to tell our store that our cartSlice has reducers by using a reducer object in store and providing the name : of cartslice(which contains all reducer and we are gonna use this reducers.)

//putting that cartslice in our store

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
