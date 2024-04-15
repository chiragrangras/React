import { createSlice } from '@reduxjs/toolkit';
import { users } from './UserData';

export let userSlice = createSlice({
    name:'user',
    initialState:users,
    reducers:{

        addUser: (state,action)=>{
            // console.log(state)
            state.push(action.payload)
            // console.log(action.payload)
        },

        editUser: (state,action)=>{
            let {id,name,email,phone} = action.payload
            // console.log(id,name,email,phone)
            console.log(id)
            console.log(name)

            let user1 = state.find((user)=>{
                return user.id == id
            })
            if(user1)
            {
               user1.name = name;
               user1.email = email;
               user1.phone = phone
            }
        },

        deleteUser: (state,action)=>{
            let {id} = action.payload
            // console.log(id,name,email,phone)
            console.log(id)

            let userId = state.find((user)=>{
                return user.id == id
            })
            if(userId)
            {
               return state.filter(user=>user.id!=id)
            }
        },

    }
})

export const {addUser ,editUser, deleteUser } = userSlice.actions
export default userSlice.reducer;