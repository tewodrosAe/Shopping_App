import React from 'react'
import OrdersList from '../components/OrdersList'

const Orders = () => {
  return (
    <div className='font-semibold'>
      Orders
      <div className='mt-3 bg-white'>
        <table className='text-sm w-full'>
          <tr className='w-full flex justify-around'>
            <th> DATE </th>
            <th> PAID </th>
            <th> RECIPIENT </th>
            <th> PRODUCTS </th>
          </tr>
          <tr className='w-full flex justify-between'>
              <td> 4/8/2023, 4:41:16 PM </td>
              <td> NO </td>
              <td> Dawid Paszko </td>
              <td> IPhone 14 pro max </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders