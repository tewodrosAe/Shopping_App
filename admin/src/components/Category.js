import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiSolidEdit } from 'react-icons/bi'
import { CiSaveUp1 } from 'react-icons/ci'
import axios from 'axios'
import { editCategory, removeCategory } from '../redux/categorySlice'

const Category = ({ data }) => {
  // React Hooks
  const [edit, setEdit] = useState(false)
  const [change, setChange] = useState({
    category: '',
    parentCategory: ''
  })
  const dispatch = useDispatch()
  const [error, setError] = useState()

  // Event handlers
  const handleEdit = () => {
    setEdit((e) => !e)
    setError()
  }
  const handleChange = (e) => {
    setChange({...change, [e.target.name]: e.target.value})
  }
  const handleSubmit = async() => {
    if(change.category === '' || typeof change.parentCategory !== 'string' || typeof change.category !== 'string'){
      setError('Invalid input submitted')
      return 0
    }
    try{
      const datas = {
        id: data._id,
        categories: change
      }
      const edited = await axios.post(`${process.env.REACT_APP_PATH}/category/edit`,{datas})
      dispatch(editCategory(edited.data))
      handleEdit()
    }catch(e){
      setError(e.error)
      console.log(e)
    }
  }
  const handleDelete = async() => {
    console.log('hey')
    try{
      const id = data._id
      const deleted = await axios.post(`${process.env.REACT_APP_PATH}/category/delete`,{id})
      dispatch(removeCategory(data._id))
    }catch(e){
      setError(e.error)
    }
  }
  
  return (
    <div className={`grid text-text2 font-medium grid-cols-3`}>
      {!edit ? (
        <>
          <p>{data.category}</p>
          <p className="mx-auto">
            {data.parentCategory ? data.parentCategory : '---'}
          </p>
        </>
      ) : (
        <>
          <input
            name='category'
            type="text"
            className="border mr-auto border-slate-400 rounded-md  px-2"
            value={change.category}
            onChange={handleChange}
            placeholder={data.category}
            required
          />
          <input
            name='parentCategory'
            type="text"
            className="border ml-auto mr-auto border-slate-400 rounded-md  px-2"
            value={change.parentCategory}
            onChange={handleChange}
            placeholder={data.parentCategory}
            required
          />
        </>
      )}
      <div className="flex gap-2 ml-auto">
        <button
          className="flex items-center gap-1 border px-3 py-double border-slate-300 rounded-sm"
          onClick={handleEdit}
        >
          {!edit ? (
            <>
              <BiSolidEdit /> Edit{' '}
            </>
          ) : (
            <>Cancel</>
          )}
        </button>
        
          {
            !edit ?
            <button className="flex items-center gap-1 border px-3 bg-error/40 text-red-700 rounded-sm" onClick={handleDelete}>
              <AiOutlineDelete /> Delete
            </button>:
            <>
              <button className='btn px-5 flex items-center gap-1' onClick={handleSubmit}>
                <CiSaveUp1/>
                Save
              </button>
            </>
          }
          
        
      </div>
      {
          error && <div className='text-xs font-semibold text-red-500'>
          *{error}
         </div>
      }
    </div>
  )
}

export default Category
