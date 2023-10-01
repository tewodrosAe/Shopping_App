import React, { useState } from 'react'
import axios from 'axios'
import { BsUpload } from 'react-icons/bs'
import MultipleDropDown from '../components/MultipleDropDown'
import { properties } from '../constants'


const ProductDetails = () => {
  // React Hooks
  const [productDetail, setProductDetail] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
  })
  const [color,setColor] = useState([])
  const [storage,setStorage] = useState([])
  const [images, setImages] = useState([])
  const [error, setError] = useState(false)
  
  // Functions
  const handleChange = (e) => {
    const name = e.target.name
    setProductDetail({...productDetail,[name]:e.target.value})
  }
  const handleImage = (e) => {
    setError(false)
    const file = e.target.files[0]
    const type = file.name.split('.').slice(-1)[0]
    if (
      type === 'jpeg' ||
      type === 'png' ||
      type === 'jpg' ||
      type === 'webp'
    ) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImages([...images, reader.result])
      }
    } else {
      setError(true)
      return 0
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
   /*  const data = {productDetail, images, property:{color, storage}}
    console.log(data) */
    const resp = await axios.post(`${process.env.REACT_APP_PATH}/product/create`, {images})
    console.log(resp)
  }
  console.log(images)

  return (
    <div>
      <h1 className="font-semibold"> Product Details </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-1 mt-6 text-product text-gray-600 font-medium"
      >
        <label> Product name </label>
        <input name='name' value={productDetail.name} onChange={handleChange} type="text" className="product-input" required/>
        <label> Category </label>
        <input name='category' value={productDetail.category} onChange={handleChange} type="text" className="product-input" required/>
        <label> Price($) </label>
        <input name='price' value={productDetail.price} onChange={handleChange} type="number" min={1} className="product-input" required/>
        <label> Color </label>
        <MultipleDropDown title='color' datas={properties.colors} setProperty={setColor} property={color}/>
        <label className='mt-3'> Storage(GB) </label>
        <MultipleDropDown title='storage' datas={properties.storage} setProperty={setStorage} property={storage}/>
        <label className='mt-3'> Photos </label>
        <div className="flex gap-3">
          {images.length > 0 &&
            images.map((image) => {
              return (
                <img
                  key={image.name}
                  className="w-28 h-28 border border-zinc-400 rounded-md"
                  src={image}
                  alt="product"
                />
              )
            })}
          <label className="upload-btn">
            <BsUpload size={20} />
            Add Image
            <input
              className="absolute h-full w-full hidden"
              type="file"
              onChange={handleImage}
            />
          </label>
        </div>
        {error && (
          <p className="text-xs text-red-500 mt-1 mb-3">
            * Only jpg, jpeg, png and webp files are permitted
          </p>
        )}
        <label> Description </label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          className="product-input"
          value={productDetail.description} 
          onChange={handleChange}
          required
        ></textarea>
        <button className='btn mt-5 p-2 w-28' type='submit'>Finish</button>
      </form>
    </div>
  )
}

export default ProductDetails
