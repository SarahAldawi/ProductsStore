import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brandName: "",
};

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    // essence: (state) => {
    //   state.brandName = "Essence";
    // },
    // chanel: (state) => {
    //   state.brandName = "Chanel";
    // },
    // dior: (state) => {
    //   state.brandName = "Dior";
    // },
    // velvetTouch: (state) => {
    //   state.brandName = "Velvet Touch";
    // },
    // apple: (state) => {
    //   state.brandName = "Apple";
    // },
    // samsung: (state) => {
    //   state.brandName = "Samsung";
    // },
    updateBrand: (state, action) => {
      state.brandName = action.payload;
    },
  },
});

// export const { updateBrand } = brandSlice.actions;

export default brandSlice.reducer;

export const { updateBrand } = brandSlice.actions;
