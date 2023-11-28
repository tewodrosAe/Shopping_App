import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { path } from "../constants";

const initialState = {
    loading: null,
    user:null,
    error:null
}
export const userLogin = createAsyncThunk('user/login',
    async(userDetail,{rejectWithValue}) =>{
        try{
            const request = await axios.post(`${path}/auth/login`,userDetail)
            const resp = await request.data
            return resp
        }catch(error){
            if(error.response){
                return rejectWithValue(error.response?.data)
            }
           return rejectWithValue({error:'There seems to be a problem'})
        }
    }
)

export const userSignup = createAsyncThunk('user/signup',
    async(userDetail,{rejectWithValue}) =>{
        try{
            const request = await axios.post(`${path}/auth/signup`,userDetail) 
            const resp = await request.data
            return resp
        }catch(e){
            if(e.response){
                return rejectWithValue(e.response?.data)
            }
            return rejectWithValue({error:'Something went wrong'})
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser : (state,action) => {
            state.user = action.payload
        },
        initialReducer: (state) => {
            state.error = null
            state.loading = null
            state.user = null
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(userLogin.pending, state => {
            state.loading = true
            state.user = null
            state.error = null
        })
        .addCase(userLogin.fulfilled, (state,action) => {
            state.loading = false 
            state.user = action.payload
            state.error = null
        })
        .addCase(userLogin.rejected, (state,action) => {
            state.loading = false
            state.user = null
            state.error = action.payload
        })
        .addCase(userSignup.pending, (state) => {
            state.loading = true
            state.user = null
            state.error = null
        })
        .addCase(userSignup.fulfilled, (state,action) => {
            state.loading = false
            state.user = action.payload
            state.error = null
        })
        .addCase(userSignup.rejected, (state,action) => {
            state.loading = false
            state.user = null
            state.error = action.payload
        })
    }
})

export const {addUser,initialReducer} = userSlice.actions

export default userSlice.reducer