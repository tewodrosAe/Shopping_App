import { configureStore } from '@reduxjs/toolkit'
import user from './userSlicer'
import userDetail from './userDetailSlicer'

export const store = configureStore({
    reducer:{
        user: user,
        userDetail: userDetail
    }
})