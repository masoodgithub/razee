import { configureStore } from "@reduxjs/toolkit";
import recipientReducer from "../features/recipientSlice";
import activityReducer from '../features/activitySlice';
import depositeSlice from '../features/depositeSlice'

const store = configureStore({
    reducer : {
        users: recipientReducer,
        activity: activityReducer,
        depo: depositeSlice
    }
});

export default store;