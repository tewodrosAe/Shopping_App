import CategoriesList from '../components/CategoriesList'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'
import DropDown from '../components/DropDown'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addCategory } from '../redux/categorySlice'
import { parentCategories } from '../constants'

const Categories = () => {
  // React Hooks
  const {category} = useSelector(state => state.category)
  const dispatch = useDispatch()
  const [parentCategory, setParentCategory] = useState()
  const [details, setDetails] = useState('')
  const [error, setError] = useState()
  
  // Event handlers
  const handleChange = (e) => {
    setDetails(`${e.target.value}`)
  }

  const handleSubmit = async() => {
    setError()
    if(details === '' || typeof details !== 'string'){
      setError('Category Field must not be empty')
      return 0
    }
    const categories = {
      category: details,
      parentCategory: parentCategory && parentCategory
    }
    try{
      const res = await axios.post(`${process.env.REACT_APP_PATH}/category/create`,{categories})
      dispatch(addCategory(res.data))
    }catch(e){
      setError(e.response.data.error)
    }
  }
  return (
    <div className='font-semibold'>
      Categories
      <div className='mt-8 font-medium text-base text-slate-700'>
        Create new category
         <div className='w-full flex gap-5 items-start mt-2'>
          <input name='category' value={details.category} onChange={handleChange} type="text" className='product-input w-full h-9 ' />
          <DropDown name='parentCategory' datas={parentCategories} dropDown={parentCategory} setDropDown={setParentCategory}/>
        </div>
        {
          error && <div className='text-xs font-semibold text-red-500'> *{error} </div>
        }
        <button className='btn mt-5 p-2 w-28' onClick={handleSubmit}>Save</button>
      </div>
      <CategoriesList title='CATEGORY NAME' category={category}/>
    </div>
  )
}

export default Categories