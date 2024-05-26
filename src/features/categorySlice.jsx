import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    beauty: (state) => {
      state.category = "beauty";
    },
    smartphones: (state) => {
      state.category = "smartphones";
    },
    laptops: (state) => {
      state.category = "laptops";
    },
    groceries: (state) => {
      state.category = "groceries";
    },
  },
});

export const { beauty, smartphones, laptops, groceries } =
  categorySlice.actions;

export default categorySlice.reducer;
