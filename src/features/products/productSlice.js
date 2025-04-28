import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  publicProducts: [],
  selectedProduct: {},
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    setPublicProducts: (state, { payload }) => {
      state.publicProducts = payload;
    },
    setSelectedProduct: (state, { payload }) => {
      state.selectedProduct = payload;
    },
  },
});

export const { setProducts, setSelectedProduct, setPublicProducts } = productSlice.actions;

export default productSlice.reducer;
