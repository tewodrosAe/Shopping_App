import React from 'react'
import ProductList from '../components/ProductList'
import { useNavigate } from 'react-router-dom'


const Products = () => {
  const navigate = useNavigate()
  return (
    <div className='shadow-md'>
      <button className='bg-btn px-4 py-1 text-white text-sm rounded-md font-medium hover:shadow-sky-200 hover:shadow-md' onClick={() => navigate('/productdetails/1')}> Add new product </button>
      <div className='bg-white my-3 text-text1 px-5 py-3 pb-6 text-black font-semibold'>
        <h1 className=' text-black/60'>PRODUCT NAME</h1>
        <div className='w-full h-single bg-black/20 mt-1 mb-3'/>
        <div className='flex flex-col gap-2'>
          <ProductList/>
          <ProductList/>
          <ProductList/>
          <ProductList/>
          <ProductList/>
        </div>
      </div>
    </div>
  )
}

export default Products