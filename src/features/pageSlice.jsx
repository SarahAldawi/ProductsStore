import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,

  // isLoading:true,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
export const { increment, decrement } = pageSlice.actions;
export default pageSlice.reducer;
