import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const skipSlice = createSlice({
  name: "skip",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.value += 10;
    },
    prevPage: (state) => {
      state.value -= 10;
    },
  },
});

export const { nextPage, prevPage } = skipSlice.actions;

export default skipSlice.reducer;
