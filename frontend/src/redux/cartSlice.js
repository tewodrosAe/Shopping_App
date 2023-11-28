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
            throw new Error(e)
        }
    }
)

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers:(builder) => {
        builder
        .addCase(getCart.fulfilled, (state, action) => {
            if(action.payload.length > 0){
                state.cart = action.payload[0].products
            }
        })
    },
    reducers:{
        addCart: (state,action) => {
            const filtered = state.cart.filter(c => c.productId === action.payload.productId)
            if(filtered.length <= 0){
                state.cart = [...action.payload]
            }
        },
        removeCart: (state,action) => {
            state.cart = state.cart.filter(c => c.productId !== action.payload )
        },
        eraseCart: (state) => {
            state.cart = []
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

export const {addCart, eraseCart,removeQuantity, addQuantity, removeCart} = cartSlice.actions

export default cartSlice.reducer