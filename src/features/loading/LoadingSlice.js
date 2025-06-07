import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        appLoading: true
    },
    reducers: {
        finsishAppLoading: (state) => {
            state.appLoading = false
        }
    }
})
export const { finsishAppLoading } = loadingSlice.actions;
export default loadingSlice.reducer;