import React from 'react'

const OrdersList = ({order}) => {
  return (
    <tr className='w-full grid justify-between grid-cols-4 py-2 text-sm'>
      <td> {order.createdAt.split('T')[0]}, {order.createdAt.split('T')[1].split('.')[0]} PM </td>
      <td className='text-green-600'> {order.payment_status.toUpperCase()} </td>
      <td> {order.userId.username} - {order.userId.email} </td>
      <td className='list-none'> {order.products.map(product => <li key={product._id}>- {product.name.slice(0,28)} {product.name.length > 28 && '...'}</li>)} </td>
    </tr>
  )
}

export default OrdersList