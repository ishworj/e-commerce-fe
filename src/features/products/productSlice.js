import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: {},
  publicProducts: {},
  selectedProduct: {},
  currentPage: 1
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
    setProductPage: (state, { payload }) => {
      state.currentPage = payload
    }
  },
});

export const { setProducts, setSelectedProduct, setPublicProducts, setProductPage } = productSlice.actions;

export default productSlice.reducer;
