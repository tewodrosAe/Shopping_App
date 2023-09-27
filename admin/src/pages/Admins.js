import React, { useEffect, useRef, useState } from 'react'
import AdminDetails from '../components/AdminDetails'
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import axios from 'axios'

const Admins = () => {
  // React Hooks
  const [admins, setAdmins] = useState([])
  const [status, setStatus] = useState('Loading...')
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
          const resp = await axios.post('http://localhost:5000/admin/create',{email, username, image})
          const data = await resp.data
          setAdmins([...admins,data])
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
      const user = await axios.delete(`http://localhost:5000/admin/${id}`)
      const newAdmins = admins.filter(admin => admin._id !== id)
      setAdmins(newAdmins)
    }catch(e){
      console.log(e)
    }
  }

  // useEffect
  useEffect(() => {
    const adminDetail = async() => {
      try{
        const {data} = await axios.get("http://localhost:5000/admin/")
        if(data.length <= 0) {
          setStatus("No Admins")
          return 0
        }
        setAdmins(data)
      }catch(e){
        setStatus('Something went wrong')
      }
    }
    adminDetail()
  },[])

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
            <tr >
              <td className='w-full h-single bg-black/20'></td>
            </tr>
            {
              admins ?
              admins.map(admin => <AdminDetails key={admin._id} handleDelete={handleDelete} admin={admin}/>) :
              <tr>
                <td> {status} </td>
              </tr>
            }
          </table>
        </div>
      </div>
    </div>
  )
}

export default Admins