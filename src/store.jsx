import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./control/mailSlice";

export default configureStore({
    reducer:{
        mail:mailReducer,
    }, 
});