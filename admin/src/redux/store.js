import {configureStore} from '@reduxjs/toolkit'
import adminReducer from './adminSlice'
import categoryReducer from './categorySlice'

const adminStore = configureStore({
    reducer:{
        user: adminReducer,
        category: categoryReducer
    }
})

export default adminStore