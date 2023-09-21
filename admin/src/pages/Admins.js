import React from 'react'
import AdminDetails from '../components/AdminDetails'

const Admins = () => {
  return (
    <div className='font-semibold'>
      Admins
      <div className='flex flex-col mt-8 font-medium text-sm'>
        Add new admin
        <div className='flex justify-center gap-6 mt-3 mr-3'>
          <input type="text" className='product-input h-10 w-full ' placeholder='google email'/>
          <button className='bg-blue-700 w-40 p-2 h-10 text-white rounded-sm'>Add Admin</button>
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