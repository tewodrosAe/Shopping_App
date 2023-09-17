import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import { Admins, Categories, Dashboard, Orders, Products } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <div className='ml-60 px-20 py-10 bg-background min-h-screen'>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/admins' element={<Admins/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App