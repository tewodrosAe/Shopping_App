import React, { useRef } from 'react'
import AdminDetails from '../components/AdminDetails'
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';

const Admins = () => {
  // React hooks
  const googleRef = useRef()
  
  // Functions

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      try{
        const data = await fetch("https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers:{
              "Authorization": `${tokenResponse.token_type} ${tokenResponse.access_token}` 
            }
          }
        )
        console.log(data)
      }catch(error){
        console.log(error)
      }
    }
  });
  
  return (
    <div className='font-semibold'>
      Admins
      <div className='flex flex-col mt-8 font-medium text-sm'>
        Add new admin
        <div className='flex gap-6 mt-3 mr-3'>
          <button onClick={() => login()} className='bg-blue-700 w-40 p-2 h-10 text-white rounded-sm'>Add Admin</button>
        </div>
      </div>
      <div className='flex flex-col mt-4 font-medium text-sm'>
        Existing Admins
        <div className='mt-3 bg-white p-3 shadow-lg'>
          <table className='text-sm w-full text-left space-y-2'>
            <tr className='w-full grid justify-between grid-cols-3 gap-20 text-slate-500'>
              <th> ADMIN GOOGLE EMAIL </th>
              <th> DATE </th>
            </tr>
            <div className='w-full h-single bg-black/20'/>
            <AdminDetails/>
            <AdminDetails/>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Admins