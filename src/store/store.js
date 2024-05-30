import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import searchSlice from "../features/searchSlice";
import categorySlice from "../features/categorySlice";
import paginationSlice from "../features/paginationSlice";
import filtersSlice from "../features/filtersSlice";
export const store = configureStore({
  reducer: {
    search: searchSlice,
    category: categorySlice,
    pagination: paginationSlice,
    filters: filtersSlice,
=======
import filterSlice from "../features/filterSlice";
import paginationSlice from "../features/paginationSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    pagination: paginationSlice,
>>>>>>> dawi
  },
});
