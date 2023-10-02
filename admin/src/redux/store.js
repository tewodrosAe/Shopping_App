import {configureStore} from '@reduxjs/toolkit'
import adminReducer from './adminSlice'
import categoryReducer from './categorySlice'
import productReducer from './productSlice'

const adminStore = configureStore({
    reducer:{
        user: adminReducer,
        category: categoryReducer,
        product: productReducer
    }
})

export default adminStore