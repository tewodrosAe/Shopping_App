import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    adminList: []
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
        },
        addAdmins: (state,action) => {
            state.adminList = action.payload
        },
        createAdmins: (state, action) => {
            state.adminList = [...state.adminList, action.payload]
        },
        deleteAdmins: (state, action) => {
            const newAdmins = state.adminList.filter(admin => admin._id !== action.payload)
            state.adminList = newAdmins
        }
    }
})

export const {addUser, removeUser, addAdmins, createAdmins, deleteAdmins} = adminSlice.actions

export default adminSlice.reducer