import OrdersList from '../components/OrdersList'

const Orders = () => {
  return (
    <div className='font-semibold'>
      Orders
      <div className='mt-3 bg-white p-3 shadow-lg'>
        <table className='text-sm w-full text-left space-y-2'>
          <tr className='w-full grid justify-between grid-cols-4'>
            <th> DATE </th>
            <th> PAID </th>
            <th> RECIPIENT </th>
            <th> PRODUCTS </th>
          </tr>
          <div className='w-full h-single bg-black/20'/>
          <OrdersList/>
          <OrdersList/>
          <OrdersList/>
          <OrdersList/>
        </table>
      </div>
    </div>
  )
}

export default Orders