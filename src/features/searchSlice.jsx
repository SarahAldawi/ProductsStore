import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

 const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setSearchTerm} = searchSlice.actions;
export default searchSlice.reducer;