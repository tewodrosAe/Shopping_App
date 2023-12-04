import React, { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAdmins, addUser } from '../redux/adminSlice';
import { getCategory } from '../redux/categorySlice';
import { getProducts } from '../redux/productSlice';
import { addOrders } from '../redux/ordersSlice';

const Login = () => {
    //React hooks
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState()

    //functions
    const login = async(cred) => {
        setError(null)
        const decoded = jwtDecode(cred.credential)
        const {email}  = decoded
        const {data} = await axios.post(`${process.env.REACT_APP_PATH}/admin/find`,{email})
        if(data.error){
            console.log(data.error)
            setError(data.error)
        }else{
            // Get Categories
            const categories = await axios.get(`${process.env.REACT_APP_PATH}/category/`)
            dispatch(getCategory(categories.data))
            
            // Add User
            dispatch(addUser(decoded))

            // Get Admins
            const admin = await axios.get(`${process.env.REACT_APP_PATH}/admin/`)
            dispatch(addAdmins(admin.data))

            // Get Products
            const product = await axios.get(`${process.env.REACT_APP_PATH}/product/`)
            dispatch(getProducts(product.data))

            //  Get Orders
            const orders = await axios.post(`${process.env.REACT_APP_PATH}/orders/`, {token: data.token})
            dispatch(addOrders(orders.data))

            // Save to local storage and navigate to home
            localStorage.setItem('user', JSON.stringify(data))
            navigate('/')
        }
    }

    return (
        <div className='flex flex-col gap-4 text-white justify-center items-center absolute h-screen w-screen bg-blue-900 pb-6'>
            <div className='text-5xl text-center font-bold tracking-tight [word-spacing:3px]'>
                Welcome, Admin
                <p className='text-2xl decoration-solid font-semibold tracking-wide [word-spacing:1px]'>
                    Please sign in
                </p>
            </div>
            <GoogleLogin
            onSuccess={credentialResponse => {
                login(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            />
            {
                error && <div className='text-sm font-bold text-center text-red-800 w-100 bg-white/50 rounded-sm p-2 px-10 transition'> *{error} </div>
            }
            <div>
                <h3 className='text-center'>Try this</h3>
                <p>Email: exampleaqnt@gmail.com</p>
                <p>Password: justcodingstuff</p>
            </div>
        </div>
    )
}

export default Login