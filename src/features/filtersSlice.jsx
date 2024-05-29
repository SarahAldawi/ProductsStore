import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  brand: "",
  search: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    essence: (state) => {
      state.brand = "Essence";
    },
    chanel: (state) => {
      state.brand = "Chanel";
    },
    dior: (state) => {
      state.brand = "Dior";
    },
    velvetTouch: (state) => {
      state.brand = "Velvet Touch";
    },
    apple: (state) => {
      state.brand = "Apple";
    },
    samsung: (state) => {
      state.brand = "Samsung";
    },
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
    setSearchTerm: (state, action) => {
        state.search = action.payload;
      },
  },
});

export const { essence, chanel, dior, velvetTouch, apple, samsung, beauty, smartphones, laptops, groceries, setSearchTerm } =
  filtersSlice.actions;

export default filtersSlice.reducer;
