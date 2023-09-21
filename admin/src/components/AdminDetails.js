import {AiOutlineDelete} from 'react-icons/ai'

const AdminDetails = () => {
  return (
    <tr className='w-full grid justify-between grid-cols-3 py-2 text-sm gap-20'>
        <td>test@gmail.com</td>
        <td>2023:5362/12/12/3</td>
        <button className='w-fit p-0.5 flex items-center ml-auto mr-9 gap-1 border px-3 bg-error/40 text-red-700 rounded-sm'> <AiOutlineDelete/> Delete</button>
    </tr>
  )
}

export default AdminDetails