import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  selectedProduct: {},
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    setSelectedProduct: (state, { payload }) => {
      state.selectedProduct = payload;
    },
  },
});

export const { setProducts, setSelectedProduct } = productSlice.actions;

export default productSlice.reducer;
