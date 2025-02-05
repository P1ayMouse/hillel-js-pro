import {configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlices";
import userReducer from "./slices/userSlices";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        user: userReducer,
    }
});
