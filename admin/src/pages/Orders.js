import {useSelector} from 'react-redux'
import OrdersList from '../components/OrdersList'

const Orders = () => {
  // React Hooks
  const {orders} = useSelector(state => state.order)

  return (
    <div className='font-semibold'>
      Orders
      <div className='mt-3 bg-white p-3 shadow-lg'>
        <table className='text-sm w-full text-left space-y-2'>
          <thead>
            <tr className='w-full grid justify-between grid-cols-4 mb-2'>
              <th> DATE </th>
              <th> PAID </th>
              <th> RECIPIENT </th>
              <th> PRODUCTS </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='w-full h-single bg-black/20'/>
            </tr>
          </tbody>
          <tfoot>
            {
              orders &&
              orders.map(order => <OrdersList key={order._id} order={order}/>)
            }
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default Orders