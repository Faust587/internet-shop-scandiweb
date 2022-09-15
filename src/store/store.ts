import {configureStore} from "@reduxjs/toolkit";
import currencyReducer from "./reducers/currencySlice";
import cartReducer from "./reducers/cartSlice";

export const setupStore = () => {
  return configureStore({
    reducer: {
      currencyReducer,
      cartReducer,
    }
  });
};
