import { configureStore } from "@reduxjs/toolkit";
import skipSlice from "../features/skipSlice";
import searchSlice from "../features/searchSlice";
import sortSlice from "../features/SortSlice";
import categorySlice from "../features/categorySlice";

export const store = configureStore({
  reducer: {
    skip: skipSlice,
    search: searchSlice,
    sort: sortSlice,
    category: categorySlice,
  },
});
