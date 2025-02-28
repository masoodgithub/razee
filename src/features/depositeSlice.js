import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { submitDeposite, getDeposite } from "../API/deposite";

export const submitDepositeAmount = createAsyncThunk('post/deposite', async(data) => {
    const res = await submitDeposite(data)
    return res;
});
export const getDepositeAmount= createAsyncThunk('get/deposite', async() => {
    const res = await getDeposite();
    return res;
})

const depositeSlice = createSlice({
    name: 'deposite',
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
            state.error = action.error?.message;
        })
        .addCase(getDepositeAmount.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getDepositeAmount.fulfilled, (state, action)=> {
            state.loading= false;
            state.deposite = action.payload;
        })
        .addCase(getDepositeAmount.rejected, (state, action)=> {
            state.loading = false;
            state.error = action.error?.message;
        })
    }
})
export default depositeSlice.reducer;