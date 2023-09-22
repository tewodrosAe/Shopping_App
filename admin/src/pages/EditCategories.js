import React, { useState } from 'react'
import PropertyDetails from '../components/PropertyDetails'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import DropDown from '../components/DropDown'
import { categories } from '../constants'

const EditCategories = () => {
  // React Hooks
  const navigate = useNavigate()
  const [dropDown, setDropDown] = useState()
  
  return (
    <div className='font-semibold'>
      Edit Category
      <div className='mt-8 font-medium text-base text-slate-700'>
        Change category
        <div className='w-full flex gap-5 items-start mt-2'>
          <input type="text" className='product-input w-full h-9 ' />
          <DropDown name='parent' dropDown={dropDown} setDropDown={setDropDown}/>
        </div>
        <div className='mt-2 font-medium text-base flex flex-col gap-2'>
          Properties
        <PropertyDetails/>
        <button className='btn-2'><AiOutlineClose/>Remove property</button>
        </div>
        <div>
            <button className='bg-white w-28 p-2 border mr-2' onClick={() => navigate(-1)}>Cancel</button>
            <button className='btn mr-auto'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default EditCategories