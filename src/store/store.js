import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../features/filterSlice";
import paginationSlice from "../features/paginationSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    pagination: paginationSlice,
  },
});
