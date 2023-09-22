import { AiOutlineDelete } from "react-icons/ai"
import { BiSolidEdit } from "react-icons/bi"
import { useNavigate } from "react-router-dom"

const Category = () => {
  // React Hooks 
  const navigate = useNavigate()

  return (
    <div className="grid grid-cols-3 text-text2 font-medium">
        <p>Iphones</p>
        <p className="mx-auto">Mobiles</p>
        <div className="flex gap-2 ml-auto">
            <button className='flex items-center gap-1 border px-3 py-double border-slate-300 rounded-sm' onClick={() => navigate('/categories/1')}><BiSolidEdit/> Edit</button>
            <button className='flex items-center gap-1 border px-3 bg-error/40 text-red-700 rounded-sm'> <AiOutlineDelete/> Delete</button>
        </div>
    </div>
  )
}

export default Category