import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: { sortBy: "", order: "" },
  skip: {
    page: 0,
  },
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.skip.page += 10;
    },
    prevPage: (state) => {
      state.skip.page -= 10;
    },
    sortByLowerPrice: (state) => {
      state.sort.sortBy = "price";
      state.sort.order = "asc";
    },
    sortByHigherPrice: (state) => {
      state.sort.sortBy = "price";
      state.sort.order = "desc";
    },
    sortByRating: (state) => {
      state.sort.sortBy = "rating";
      state.sort.order = "asc";
    },
    sortByTitle: (state) => {
      state.sort.sortBy = "title";
      state.sort.order = "asc";
    },
  },
});

export const { nextPage, prevPage,  sortByLowerPrice,
  sortByHigherPrice,
  sortByRating,
  sortByTitle, } = paginationSlice.actions;

<<<<<<< HEAD
export default paginationSlice.reducer;
=======
export default paginationSlice.reducer;
>>>>>>> dawi
