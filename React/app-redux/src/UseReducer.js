import { createSlice } from '@reduxjs/toolkit';
import { users } from './UserData';

export let userSlice = createSlice({
    name:'user',
    initialState:users,
    reducers:{

        // addUser: (state,action)=>{

        // },

        // editUser: (state,action)=>{
            
        // },

        // deleteUser: (state,action)=>{
            
        // },

    }
})

export default userSlice.reducer;