import {configureStore} from '@reduxjs/toolkit'
import adminReducer from './adminSlice'

const adminStore = configureStore({
    reducer:{
        user: adminReducer
    }
})

export default adminStore