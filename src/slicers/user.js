import { createSlice } from "@reduxjs/toolkit";


export const userSlice= createSlice({
    name: "user",
    initialState: { 
        value:{ name:"", age:0, email:"", mobile:""},
        savedUserId:""
    },
    reducers: {
        login: (state, action)=>{
            state.value = action.payload
        },
        changeUserId: (state, action)=>{
            state.savedUserId = action.payload
        },
    }
})

export const {login, }= userSlice.actions
export default userSlice.reducer