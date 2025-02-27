import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { submitDeposite } from "../API/deposite";

export const submitDepositeAmount = createAsyncThunk(async(data) => {
    const res = await submitDeposite(data)
    return res;
});

const depositeSlice = createSlice({
    name: deposite,
    initialState: {
        loading: false,
        error: false,
        deposite: 0,

    },
    
    extraReducers:(builder) =>{
        builder
        .addCase(submitDepositeAmount.pending, (state) => {
            state.loading = true
        })
        .addCase(submitDepositeAmount.fulfilled, (state, action)=>{
            state.loading= false;
            state.deposite = action.payload;
        })
        .addCase(submitDepositeAmount.rejected, (state, action)=> {
            state.loading=false;
            state.error = action.error;
        })
    }
})
export default depositeSlice.reducer;