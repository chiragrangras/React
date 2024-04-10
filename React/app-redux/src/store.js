import { configureStore } from "@reduxjs/toolkit";
import UseReducer, { userSlice } from "./UseReducer";


export let store = configureStore({
    reducer:{
        user:UseReducer
    }
})