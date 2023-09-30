import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: []
} 
const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers:{
        getCategory: (state, action) =>{
            state.category = action.payload
        },
        addCategory: (state,action) => {
            state.category = [...state.category, {...action.payload}]
        },
        editCategory: (state, action) => {
            state.category = state.category.map(c => {
                if(c._id === action.payload._id){
                    c = action.payload
                }
                return c
        })
        }
        ,
        removeCategory: (state,action) => {
            state.category = state.category.filter(c => c._id !== action.payload)
        }
    }
})

export const {getCategory, addCategory, editCategory, removeCategory} = categorySlice.actions

export default categorySlice.reducer