import { configureStore } from "@reduxjs/toolkit";
import UseReducer from "./UseReducer";


export let store = configureStore({
    reducer:{
        user:UseReducer
    }
})