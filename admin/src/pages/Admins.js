import React, { useEffect, useState } from 'react'
import AdminDetails from '../components/AdminDetails'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { createAdmins, deleteAdmins } from '../redux/adminSlice';

const Admins = () => {
  // React Hooks
  const { adminList: admins, user } = useSelector(state => state.user)
  const status = ('Loading...')
  const dispatch = useDispatch() 
  
  // Functions
  const login = useGoogleLogin({
    onSuccess: async response => {
      try{
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers:{
              "Authorization": `${response.token_type} ${response.access_token}` 
            }
          }
        )
        const {email, name:username, picture:image} = res.data
        try{
          const resp = await axios.post(`${process.env.REACT_APP_PATH}/admin/create`,{email, username, image})
          const data = await resp.data
          dispatch(createAdmins(data))
        }catch(e){
          console.log(e)
        }
      }catch(error){
        console.log('Google auth error')
      }
    }
  });
  const handleDelete = async(id) => {
    try{
      await axios.delete(`${process.env.REACT_APP_PATH}/admin/${id}`)
      dispatch(deleteAdmins(id))
    }catch(e){
      console.log('Something went wrong')
    }
  }
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
        Other Existing Admins
        <div className='mt-3 bg-white p-3 shadow-lg'>
          <table className='text-sm w-full text-left space-y-2'>
            <thead>
              <tr className='w-full grid justify-between grid-cols-3 gap-20 text-slate-500 mb-1'>
                <th> ADMIN GOOGLE EMAIL </th>
                <th> DATE </th>
              </tr>
              <tr >
                <td className='w-full h-single bg-black/20 '></td>
              </tr>
            </thead>
            <tbody>
              {
                admins ?
                admins.map(admin => <AdminDetails key={admin._id} handleDelete={handleDelete} admin={admin} currentId={user._id} canDelete={admin.email === 'tewodrosaemiro@gmail.com'}/>) :
                <tr>
                  <td> {status} </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Admins