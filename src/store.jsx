import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./control/mailSlice";
import userReducer from "./control/userSlice";

export const store = configureStore({
    reducer:{
        mail:mailReducer,
        user:userReducer,
    }, 
});