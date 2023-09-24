import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import { Admins, Categories, Dashboard, EditCategories, Orders, ProductDetails, Products } from './pages'
import Login from './pages/Login'
import { BasicLayout } from './layout/BaseLayout'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BasicLayout/>}>
          <Route  path='/' element={<Dashboard/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/productdetails/:id' element={<ProductDetails/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/categories/:id' element={<EditCategories/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/admins' element={<Admins/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App