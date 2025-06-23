import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: {},
  // this one is acc to the pagination 
  publicProducts: {},
  allActiveProducts: [],
  selectedProduct: null,
  productCustomerPage: 1,
  productAdminPage: 1
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
    setAllActiveProducts: (state, { payload }) => {
      state.allActiveProducts = payload;
    },
    setSelectedProduct: (state, { payload }) => {
      state.selectedProduct = payload;
    },
    setProductCustomerPage: (state, { payload }) => {
      state.productCustomerPage = payload
    },
    setProductAdminPage: (state, { payload }) => {
      state.productAdminPage = payload
    }
  },
});

export const { setProducts, setSelectedProduct, setPublicProducts, setAllActiveProducts, setProductCustomerPage, setProductAdminPage } = productSlice.actions;

export default productSlice.reducer;
