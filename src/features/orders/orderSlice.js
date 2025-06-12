import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  shippingAddress: ""
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
    }
  },
});

const { reducer, actions } = orderSlice;

export const { setOrders, setShippingAddress } = actions;
export default reducer;