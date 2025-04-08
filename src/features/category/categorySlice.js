import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: "",
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (state, { payload }) => {
      state.selectedCategory = payload || "";
    },
  },
});

const { reducer, actions } = categorySlice;

export const { setSelectedCategory } = actions;
export default reducer;
