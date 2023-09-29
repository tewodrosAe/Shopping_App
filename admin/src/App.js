import React, { useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from './redux/adminSlice'
import { Admins, Categories, Dashboard, EditCategories, Orders, ProductDetails, Products } from './pages'
import Login from './pages/Login'
import { BasicLayout } from './layout/BaseLayout'
import axios from 'axios'


const App = () => {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async() => {
      const current = localStorage.getItem('user')
      if(current){
        try{
          const user = await axios.post(`${process.env.PATH}/admin/search`,JSON.parse(current))
          dispatch(addUser(user.data))
          setLoading(false)
        }catch(e){
          console.log('something went wrong')
        }
      }
      setLoading(false)
    }
    fetchUser()
  },[])

  return (
    <BrowserRouter>
    {
      loading ? 
      <div className=' flex justify-center items-center w-screen h-screen bg-slate-200'> 
        <div className='border p-5 border-black rounded-full animate-pulse bg-slate-900'>
          <img src="LOGO.png" alt="" className='w-10 h-10' />
        </div>
      </div>:
        <Routes>
          <Route path='/' element={user.email ? <BasicLayout/> : <Navigate to='/login'/>}>
            <Route  path='/' element={<Dashboard/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/productdetails/:id' element={<ProductDetails/>}/>
            <Route path='/categories' element={<Categories/>}/>
            <Route path='/categories/:id' element={<EditCategories/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/admins' element={<Admins/>}/>
          </Route>
          <Route path='/login' element={!user.email ? <Login/> : <Navigate to='/' />}/>
        </Routes>
      }
    </BrowserRouter>
  )
}

export default App