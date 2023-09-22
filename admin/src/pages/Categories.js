import PropertyDetails from '../components/PropertyDetails'
import CategoriesList from '../components/CategoriesList'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'
import DropDown from '../components/DropDown'

const Categories = () => {
  // React Hooks
  const [propertyClicked, setPropertyClicked] = useState(false)
  const [dropDown, setDropDown] = useState()
  
  return (
    <div className='font-semibold'>
      Categories
      <div className='mt-8 font-medium text-base text-slate-700'>
        Create new category
        <div className='w-full flex gap-5 items-start mt-2'>
          <input type="text" className='product-input w-full h-9 ' />
          <DropDown name='parent' dropDown={dropDown} setDropDown={setDropDown}/>
        </div>
        <div className='mt-2 font-medium text-base flex flex-col gap-2'>
          Properties
          {
            !propertyClicked ?
            <button className='btn-2' onClick={() => setPropertyClicked(p => !p)}> <AiOutlinePlus/>Add new property</button> :
            <>
              <PropertyDetails/>
              <button className='btn-2'onClick={() => setPropertyClicked(p => !p)}><AiOutlineClose/>Remove property</button>
            </>
          }
        </div>
        <button className='btn'>Save</button>
      </div>
      <CategoriesList/>
    </div>
  )
}

export default Categories