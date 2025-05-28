import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    resetUser: (state) => {
      state.user = null;
    },
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const { setUser, resetUser, setMenu } = userSlice.actions;

export default userSlice.reducer;
