import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {}
} 
const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers:{
        addUser: (state, action) =>{
            state.user = action.payload
        },
        removeUser: (state) => {
            state.user = []
        }
    }
})

export const {addUser, removeUser} = adminSlice.actions

export default adminSlice.reducer