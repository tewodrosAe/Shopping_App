import {configureStore} from '@reduxjs/toolkit'
import adminReducer from './adminSlice'
import categoryReducer from './categorySlice'
import productReducer from './productSlice'
import orderReducer from './ordersSlice'

const adminStore = configureStore({
    reducer:{
        user: adminReducer,
        category: categoryReducer,
        product: productReducer,
        order: orderReducer
    }
})

export default adminStore