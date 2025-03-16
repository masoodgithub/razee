import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { submitDeposite, getDeposite } from "../API/deposite";

export const submitDepositeAmount = createAsyncThunk('deposite/submitDeposite', async(data) => {
    const res = await submitDeposite(data)
    return res;
});
export const getDepositeAmount= createAsyncThunk('deposite/getDeposite', async() => {
    const res = await getDeposite();
    return res;
})

const depositeSlice = createSlice({
    name: 'deposite',
    initialState: {
        isLoading: false,
        isError: false,
        depo: [],
    },

    extraReducers:(builder) =>{
        builder
        .addCase(submitDepositeAmount.pending, (state) => {
            state.isLoading = true
        })
        .addCase(submitDepositeAmount.fulfilled, (state, action)=>{
            state.isLoading= false;
            state.depo = action.payload;
        })
        .addCase(submitDepositeAmount.rejected, (state, action)=> {
            state.isLoading=false;
            state.isError = action.error?.message;
        })
        .addCase(getDepositeAmount.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getDepositeAmount.fulfilled, (state, action)=> {
            state.isLoading= false;
            state.depo = action.payload;
        })
        .addCase(getDepositeAmount.rejected, (state, action)=> {
            state.isLoading = false;
            state.isError = action.error?.message;
        })
    }
})
export default depositeSlice.reducer;