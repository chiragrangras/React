import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserReducer";


export let store = configureStore({
    reducer:{
        users:UserReducer
    }
})