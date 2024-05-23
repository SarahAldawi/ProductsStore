import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "../features/pageSlice";
import skipSlice from "../features/skipSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    skip: skipSlice,
  },
});

