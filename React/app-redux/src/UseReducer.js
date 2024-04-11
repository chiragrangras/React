import { createSlice } from '@reduxjs/toolkit';
import { users } from './UserData';

export let userSlice = createSlice({
    name:'user',
    initialState:users,
    reducers:{

        addUser: (state,action)=>{
            console.log(state)
            // console.log(action.payload)
        },

        // editUser: (state,action)=>{
            
        // },

        // deleteUser: (state,action)=>{
            
        // },

    }
})

export const {addUser} = userSlice.actions
export default userSlice.reducer;