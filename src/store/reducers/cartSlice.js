import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  productList: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.productList.push(action.payload);
    },
    incrementProductCounter: (state, action) => {
      state.productList[action.payload].amount++;
    },
    decrementProductCounter: (state, action) => {
      if (state.productList[action.payload].amount > 0) state.productList[action.payload].amount--;
      if (state.productList[action.payload].amount === 0) state.productList.splice(action.payload, 1);
    },
    deleteProductFromCart: (state, action) => {
      state.productList.splice(action.payload, 1);
    },
    clearCart: state => {
      state.productList = [];
    }
  }
});

export default cartSlice.reducer;
