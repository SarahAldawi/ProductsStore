import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "",
  order: "",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    sortByLowerPrice: (state) => {
      state.sort = "price";
      state.order = "asc";
    },
    sortByHigherPrice: (state) => {
      state.sort = "price";
      state.order = "desc";
    },
    sortByRating: (state) => {
      state.sort = "rating";
      state.order = "asc";
    },
    sortByTitle: (state) => {
      state.sort = "title";
      state.order = "asc";
    },
  },
});

export const {
  sortByLowerPrice,
  sortByHigherPrice,
  sortByRating,
  sortByTitle,
} = sortSlice.actions;

export default sortSlice.reducer;
