import React, { useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addAdmins, addUser } from './redux/adminSlice'
import { Admins, Categories, Dashboard, Orders, ProductDetails, Products } from './pages'
import Login from './pages/Login'
import { BasicLayout } from './layout/BaseLayout'
import axios from 'axios'
import { getCategory } from './redux/categorySlice'
import { getProducts } from './redux/productSlice'


const App = () => {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)
  const {category} = useSelector(state => state.category)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async() => {
      const current = localStorage.getItem('user')
      if(current){
        try{
          // Login Admin
          const user = await axios.post(`${process.env.REACT_APP_PATH}/admin/search`,JSON.parse(current))
          dispatch(addUser(user.data))

          // Get Categories
          const categories = await axios.get(`${process.env.REACT_APP_PATH}/category/`)
          dispatch(getCategory(categories.data))

          // Get Admin List
          const admins = await axios.get(`${process.env.REACT_APP_PATH}/admin/`)
          dispatch(addAdmins(admins.data))

          // Get Products
          const product = await axios.get(`${process.env.REACT_APP_PATH}/product/`)
          dispatch(getProducts(product.data))
          
          setLoading(false)
        }catch(e){
          console.log('Something went wrong')
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
            <Route path='/productdetails/:productId' element={<ProductDetails/>}/>
            <Route path='/categories' element={<Categories/>}/>
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