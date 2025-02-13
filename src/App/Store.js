import { configureStore } from "@reduxjs/toolkit";
import recipientReducer from "../features/recipientSlice";

const store = configureStore({
    reducer : {
        users: recipientReducer
    }
});

export default store;