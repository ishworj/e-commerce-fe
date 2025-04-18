import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, { payload }) => {
      state.orders = payload || [];
    },
  },
});

const { reducer, actions } = orderSlice;

export const { setOrders } = actions;
export default reducer;
