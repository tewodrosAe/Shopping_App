import { BiSolidEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../redux/productSlice'
import { useNavigate } from 'react-router-dom'

const ProductList = ({data}) => {
  // React Hooks
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // Event Handlers
  const handleDelete = async() => {
    const id = data._id
    try{
      await axios.post(`${process.env.REACT_APP_PATH}/product/delete`, {id})
      dispatch(deleteProduct(id))
    }catch(e){
      console.log('something went wrong')
    }
  }

  return (
    <div className='flex justify-between border-b items-center pb-1'>
        <h1 className='text-text2'>{data.name}</h1>
        <div className='flex gap-3'>
            <button className='flex items-center gap-1 border px-3 py-double border-slate-300 rounded-sm' onClick={() => navigate(`/productdetails/${data._id}`)}><BiSolidEdit/> Edit</button>
            <button className='flex items-center gap-1 border px-3 bg-error/40 text-red-700 rounded-sm' onClick={handleDelete}> <AiOutlineDelete/> Delete</button>
        </div>
    </div>
  )
}

export default ProductList