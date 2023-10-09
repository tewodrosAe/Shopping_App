import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { path } from '../constants'

const initialState = {
    cart:[]
}
export const getCart = createAsyncThunk('get/cart',
    async(token) => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try{
            const cart = await axios.get(`${path}/cart`,config)
            const resp  = await cart.data
            return resp
        }catch(e){
            console.log('Something went wrong!')
        }
    }
)

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers:(builder) => {
        builder
        .addCase(getCart.fulfilled, (state, action) => {
            state.cart = action.payload
        })
    },
    reducers:{
        addCart: (state,action) => {
            const filtered = state.cart.filter(c => c.productId === action.payload.productId)
            if(filtered.length <= 0){
                state.cart = [...state.cart, action.payload]
            }
        },
        addQuantity: (state,action) => {
            state.cart = state.cart.map(c => {
                if(c.productId === action.payload.productId){
                    c.quantity += 1
                }
                return c
            })
        },
        removeQuantity: (state, action) => {
            const filtered = state.cart.filter(c => c.productId === action.payload.productId)[0]
            if(filtered.quantity === 1){
                state.cart = state.cart.filter(c => c.productId !== action.payload.productId)
            }else{
                state.cart = state.cart.map(c => {
                    if(c.productId === action.payload.productId){
                        c.quantity -= 1
                    }
                    return c
                })
            }
        }
    }
})

export const {addCart, removeQuantity, addQuantity,} = cartSlice.actions

export default cartSlice.reducer