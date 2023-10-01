import {AiOutlineDelete} from 'react-icons/ai'

const AdminDetails = ({admin, handleDelete, currentId}) => {
  return (
    <tr className='w-full grid justify-between grid-cols-3 py-2 text-sm gap-20'>
        <td>{admin.email}</td>
        <td>{admin.createdAt.split('T')[0]}</td>
        <td>
          {
            admin._id !== currentId &&  
            <button onClick={() => handleDelete(admin._id)} className='w-fit p-0.5 flex items-center ml-auto mr-9 gap-1 border px-3 bg-error/40 text-red-700 rounded-sm'> <AiOutlineDelete/> Delete</button>
          }
        </td>
    </tr>
  )
}

export default AdminDetails