import { createSlice } from "@reduxjs/toolkit";

const depositeSlice = createSlice({
    name: deposite,
    initialState: {
        deposite: 0
    },
    reducers: {
        deposite: (state, action) => {
            state.deposite = action.payload;
        }
    }
})
export const {deposite}= depositeSlice.actions;
export default depositeSlice.reducer;