import { configureStore } from "@reduxjs/toolkit";
import recipientReducer from "../features/recipientSlice";
import activityReducer from '../features/activitySlice';

const store = configureStore({
    reducer : {
        users: recipientReducer,
        activity: activityReducer
    }
});

export default store;