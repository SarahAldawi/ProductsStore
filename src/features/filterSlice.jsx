import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brandName: "",
  category: "",
  search: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateBrand: (state, action) => {
      state.brandName = action.payload;
    },
    updateCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const { updateBrand, updateCategory, setSearchTerm } =
  filterSlice.actions;
