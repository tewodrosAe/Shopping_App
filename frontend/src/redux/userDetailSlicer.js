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

export const {addUserDetail } = userDetailSlicer.actions

export default userDetailSlicer.reducer