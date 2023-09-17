import { BiSolidEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'

const ProductList = () => {
  return (
    <div className='flex justify-between border-b items-center pb-1'>
        <h1 className='text-text2'>Iphone 14 Pro Black</h1>
        <div className='flex gap-3'>
            <button className='flex items-center gap-1 border px-3 py-double border-slate-300 rounded-sm'><BiSolidEdit/> Edit</button>
            <button className='flex items-center gap-1 border px-3 bg-error/40 text-red-700 rounded-sm'> <AiOutlineDelete/> Delete</button>
        </div>
    </div>
  )
}

export default ProductList