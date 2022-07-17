import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  currencyId: 0,
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setNewCurrency: (state, action) => {
      state.currencyId = action.payload;
    }
  }
});

export default currencySlice.reducer;
