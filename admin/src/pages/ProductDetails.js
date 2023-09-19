import React from 'react'
import {BsUpload} from 'react-icons/bs'

const ProductDetails = () => {
    const handleSubmit = (e) => {
        
        console.log('submitted')
    }
    return (
        <div>
            <h1 className='font-semibold'> Product Details </h1>
            <form onClick={handleSubmit} className='flex flex-col gap-1 mt-6 text-product text-gray-600 font-medium'>
                <label> Product name </label>
                <input type="text" className='product-input'/>
                <label> Category </label>
                <input type="text" className='product-input'/>
                <label> Color </label>
                <input type="text" className='product-input'/>
                <label> Storage(GB) </label>
                <input type="text" className='product-input'/>
                <label> Photos </label>
                <label className='upload-btn'>
                    <BsUpload size={20}/>
                    Add Image
                    <input className='absolute h-full w-full hidden' type='file'/>
                </label>
                <label> Description </label>
                <textarea name="desc" cols="30" rows="10" className='product-input'></textarea>
            </form>
        </div>
  )
}

export default ProductDetails