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
            state.push(action.payload)

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
               user1.phone = phone;
            }
        },

        // deleteUser: (state,action)=>{
            
        // },

    }
})

export const {addUser ,editUser } = userSlice.actions
export default userSlice.reducer;