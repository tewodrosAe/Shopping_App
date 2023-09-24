import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';

const Login = () => {
    const login = (cred) => {
        const decoded = jwtDecode(cred.credential)
        const {email, family_name, given_name, picture} = decoded
        const data = {email, family_name, given_name, picture}
        console.log(data)
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
        </div>
    )
}

export default Login