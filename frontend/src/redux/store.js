import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlicer'
import userDetailReducer from './userDetailSlicer'
import productReducer from './productSlice'
import cartReducer from './cartSlice'

export const store = configureStore({
    reducer:{
        user: userReducer,
        userDetail: userDetailReducer,
        product: productReducer,
        cart: cartReducer
    }
})