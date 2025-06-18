import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: {},
  shippingAddress: "",
  currentPage: 1
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, { payload }) => {
      state.orders = payload || [];
    },
    setShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    setOrderPage: (state, { payload }) => {
      state.currentPage = payload
    }
  },
});

const { reducer, actions } = orderSlice;

export const { setOrders, setShippingAddress, setOrderPage } = actions;
export default reducer;