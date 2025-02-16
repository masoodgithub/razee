import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getExpense,getDonation,ActivitySubmit, getSalary, getAllActivitis } from "../API/getActivityData";

export const getAllActivity = createAsyncThunk('activity/getActivity', async()=>{
    const res =await getAllActivitis();
    return res.data;
});
export const getExpenses = createAsyncThunk('activity/getExpense', async()=>{
    const res =await getExpense();
    return res.data;
});
export const getDonations = createAsyncThunk('activity/getDonation', async()=>{
    const res =await getDonation();
    return res.data;
});
export const getSalaries = createAsyncThunk('activity/getSalary', async()=>{
    const res =await getSalary();
    return res.data;
});
export const ActivitySubmits = createAsyncThunk('activity/ActivitySubmit', async(acct)=>{
    const res =await ActivitySubmit(acct);
    return res.data;
});

const activitySlice = createSlice({
    name:'activity',
    initialState:{
        isLoading: false,
        activity:[],  
        isError: false,
        submitedActivity:[],
        tSalary:null,
        tDonation:null,
        tExpense:null,
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getExpenses.pending, (state)=> {
            state.isLoading= true;
        })
        .addCase(getDonations.pending, (state)=> {
            state.isLoading= true;
        })
        .addCase(getSalaries.pending, (state)=> {
            state.isLoading= true;
        })
        .addCase(getExpenses.rejected, (state, action)=> {
            state.isError= action.error?.message;
        })
        .addCase(getDonations.rejected, (state, action)=> {
            state.isError= action.error?.message;
        })
        .addCase(getSalaries.rejected, (state, action)=> {
            state.isError= action.error?.message;
        })
        .addCase(getExpenses.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isError = false;
            state.activity = action.payload;
        })
        .addCase(getDonations.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isError = false;
            state.activity = action.payload;
        })
        .addCase(getSalaries.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isError = false;
            state.activity = action.payload;
        })
        .addCase(getAllActivity.pending, (state)=>{
                state.isLoading= true;
        })
        .addCase(getAllActivity.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.activity= action.payload;
        })
        .addCase(getAllActivity.rejected, (state, action)=>{
            state.isError = action.error?.message;
        })
        .addCase(ActivitySubmits.pending, (state)=>{
            state.isLoading= true;
    })
    .addCase(ActivitySubmits.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.isError = false;
        state.activity= action.payload;
    })
    .addCase(ActivitySubmits.rejected, (state, action)=>{
        state.isError = action.error?.message;
    })
        
    }
})

export default activitySlice.reducer;