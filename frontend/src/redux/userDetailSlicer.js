import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { pathName } from "../config";

export const createUserDetails = createAsyncThunk('/userdetail',
    async(userDetails) => {
        const request = await axios.post(`${pathName}api/v1/userdetail/create`,userDetails)
        const resp = await request.data
        return resp
    }
)

export const getUserDetails = createAsyncThunk('get/userdetail',
    async(token,{rejectWithValue}) => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try{
            const request = await axios.get(`${pathName}api/v1/userdetail/`,config)
            const resp  = await request.data
            return resp
        }catch(e){
            if(e.response){
                return rejectWithValue(e.response?.data)
            }
            return rejectWithValue({error:'somin'})
        }
    }
)
const userDetailSlicer = createSlice({
    name:'userDetail',
    initialState:{
        detail:null,
        error:null
    },
    reducers: {
        addUserDetail: (state,action) => {
            state.detail = action.payload
        } ,
        addFav: (state, action) => {
            state.detail.favorites = [...state.detail.favorites, action.payload]
            state.detail.favoritesAdded = [...state.detail.favoritesAdded, {[action.payload._id]:action.payload._id}]
        },
        removeFav: (state, action) => {
            state.detail.favorites = state.detail.favorites.filter(fav => fav._id !== action.payload.id)
            state.detail.favoritesAdded = action.payload.newFav
        }
    }
    ,
    extraReducers: (builder) => {
        builder
        .addCase(createUserDetails.fulfilled, (state,action) =>{
            state.detail = action.payload
            state.error = null
        })
        .addCase(createUserDetails.rejected, (state) => {
            state.detail = null
            state.error = 'something went wrong'
        })
        .addCase(getUserDetails.fulfilled, (state,action) => {
            state.detail = action.payload
            state.error = null
        })
        .addCase(getUserDetails.rejected, (state) => {
            state.error = 'something went wrong'
            state.user = null
        })
    }
})

export const {addUserDetail, addFav, removeFav } = userDetailSlicer.actions

export default userDetailSlicer.reducer