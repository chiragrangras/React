import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./UseReducer";


export let store = configureStore({
    reducer:{
        user:userSlice
    }
})