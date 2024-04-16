import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name:"User",
    initialState:[],
    reducers:{
        test:(state,action)=>{
            fetch('http://localhost:5000/users')
            .then((res)=>{return res.json})
            .then((data)=>{
                state.push(data)
            })
            console.log(state)
        }
    }
})
export default userSlice.reducer;