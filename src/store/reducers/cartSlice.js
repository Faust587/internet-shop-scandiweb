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
      state.productList[action.payload].amount--;
    },
    deleteProductFromCart: (state, action) => {
      state.productList.splice(action.payload, 1);
    }
  }
});

export default cartSlice.reducer;
