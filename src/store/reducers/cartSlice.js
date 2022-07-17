import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  productList: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.push(action.payload);
    },
    incrementProductCounter: (state, action) => {
      state[action.payload].amount++;
    },
    decrementProductCounter: (state, action) => {
      state[action.payload].amount--;
    },
    deleteProductFromCart: (state, action) => {
      state.splice(action.payload, 1);
    }
  }
});

export default cartSlice.reducer;
