import React, { useState } from 'react'
import {BsUpload} from 'react-icons/bs'

const ProductDetails = () => {
    const [images, setImages] = useState([])
    const handleSubmit = (e) => {
        console.log('submitted')
    }

    const handleImage = (e) => {
        setImages([...images,e.target.files[0]])
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
                <div className='flex gap-3'>
                    {
                        images.length > 0 &&
                        images.map( image => {
                            return <img className='w-28 h-28 border border-zinc-400 rounded-md' src={URL.createObjectURL(image)} alt="product" />
                        })
                    }
                    <label className='upload-btn'>
                        <BsUpload size={20}/>
                        Add Image
                        <input className='absolute h-full w-full hidden' type='file' onChange={handleImage}/>
                    </label>
                </div>
                <label> Description </label>
                <textarea name="desc" cols="30" rows="10" className='product-input'></textarea>
            </form>
        </div>
  )
}

export default ProductDetails