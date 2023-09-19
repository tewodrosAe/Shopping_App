import React from 'react'

const OrdersList = () => {
  return (
    <tr className='w-full grid justify-between grid-cols-4 py-2 text-sm'>
      <td> 4/8/2023, 4:41:16 PM </td>
      <td className='text-red-600'> NO </td>
      <td> Dawid Paszko </td>
      <td> IPhone 14 pro max </td>
    </tr>
  )
}

export default OrdersList