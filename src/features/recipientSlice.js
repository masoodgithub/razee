import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getUser, postUser, deleteUser} from '../API/getsUsers';

export const fetchRecipient = createAsyncThunk("gets/users", 
    async() => {
    const res = await getUser();
    return res;
});
export const submitRecipient = createAsyncThunk("post/user", 
    async(user) => {
    const res = await postUser(user);
    return res;
});
export const deleteRecipient = createAsyncThunk('delete/user', async(id)=> {
    const res = await deleteUser(id);
    return res;
})


const recipientSlice = createSlice({
    name:'gets',
    initialState:{
        isLoading:false,
        isError: false,
        recipient:[],
    },
   
    extraReducers:(builder)=> {
        builder.addCase(fetchRecipient.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(fetchRecipient.fulfilled, (state, action) => {
            state.isLoading = false;
            state.recipient= action.payload;
            state.isError = false;
        })
        .addCase(fetchRecipient.rejected, (state, action)=>{
            state.isLoading= false;
            state.recipient =[];
            state.isError = action.error?.message;
        })
        .addCase(submitRecipient.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(submitRecipient.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.recipient= action.payload;
            state.isError = false;
        })
        .addCase(submitRecipient.rejected, (state, action)=> {
            state.isLoading= false;
            state.recipient =[];
            state.isError = action.error?.message;
        })
        .addCase(deleteRecipient.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.recipient= action.payload;
            state.isError = false;
        })
    }
});
export default recipientSlice.reducer;