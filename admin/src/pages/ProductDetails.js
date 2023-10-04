import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import { BsUpload } from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
import MultipleDropDown from '../components/MultipleDropDown'
import { properties } from '../constants'
import DropDown from '../components/DropDown'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts, editProduct} from '../redux/productSlice'
import {InfinitySpin} from 'react-loader-spinner'

const ProductDetails = () => {
  // React Hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {category: data} = useSelector(state => state.category)
  const { productId } = useParams()
  const [productDetail, setProductDetail] = useState({
    name: '',
    price: '',
    description: '',
  })
  const [color,setColor] = useState([])
  const [category,setCategory] = useState()
  const [storage,setStorage] = useState([])
  const [images, setImages] = useState([])
  const [originalImages, setOriginalImages] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  // Constants
  const edit = productId !== 'new'
  
  // Eventhandlers
  const handleChange = (e) => {
    if(e.target?.name){
      const name = e.target.name
      setProductDetail({...productDetail,[name]:e.target.value})
    }
  }
  const handleImage = (e) => {
    setError(false)
    const file = e.target.files[0]
    if(!file){
      return 0
    }
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
    setLoading(true)
    document.body.style.overflow = "hidden"
    const {name, price, description} = productDetail
    const property = {
      storage,
      color
    }
    try{
      const resp = await axios.post(`${process.env.REACT_APP_PATH}/product/create`, {name, category, price, property, description, images})
      dispatch(addProducts(resp.data))
      document.body.style.overflow = "visible"
      navigate(-1)
      setLoading(false)
    }catch(e){
      console.log(e)
      setLoading(false)
    }
  }

  const handleDelete = (pic) => {
    const newImage = originalImages.filter(image => image !== pic)
    setOriginalImages(newImage)
  }

  const handleEdit = async(e) => {
    e.preventDefault()
    setLoading(true)
    document.body.style.overflow = "hidden"
    const {name, price, description} = productDetail
    const property = {
      storage,
      color
    }
    try{
      const resp = await axios.post(`${process.env.REACT_APP_PATH}/product/edit/${productId}`, {name, category, price, property, description, originalImages, images})
      dispatch(editProduct(resp.data))
      document.body.style.overflow = "visible"
      navigate(-1)
      setLoading(false)
    }catch(e){
      setError(true)
      document.body.style.overflow = "visible"
      setLoading(false)
    }
  }
  // useEffect
  useEffect(() => {
    if(edit){
    const getProduct = async() => {
      const currentProduct = (await axios.get(`${process.env.REACT_APP_PATH}/product/${productId}`)).data
      setProductDetail({name:currentProduct.name, price:currentProduct.price, description:currentProduct.description})
      setColor(currentProduct.property.color)
      setStorage(currentProduct.property.storage)
      setCategory(currentProduct.category)
      setOriginalImages(currentProduct.picture)
    }
    getProduct()
  }
  },[])

  return (
    <div className={`${loading ? 'h-full overflow-hidden': 'overflow-visible'} transition ease-in duration-700`}>
      <div className={`flex flex-col items-center justify-center fixed top-0 left-0 h-screen w-screen z-30 bg-white/40 backdrop-filter backdrop-blur-sm transition ease-in duration-700 overflow-hidden ${loading ? 'block' : 'hidden'}`}>
        <InfinitySpin 
          width='200'
          color="purple"
        />
        <div className='mb-5 text-black'>
          Wait a minute...
        </div>
      </div>
      <h1 className="font-semibold"> Product Details </h1>
      <form
        onSubmit={edit ? handleEdit :handleSubmit}
        className='flex flex-col gap-1 mt-6 text-product text-gray-600 font-medium transition ease-in duration-700 '
        
      >
        <label> Product name </label>
        <input name='name' value={productDetail.name} onChange={handleChange} type="text" className="product-input" required/>
        <label> Category </label>
        <DropDown name='category' datas={data} dropDown={category} setDropDown={setCategory} object={true}/>
        <label> Price($) </label>
        <input name='price' value={productDetail.price} onChange={handleChange} type="number" min={1} className="product-input" required/>
        <label> Color </label>
        <MultipleDropDown title='color' datas={properties.colors} setProperty={setColor} property={color}/>
        <label className='mt-3'> Storage(GB) </label>
        <MultipleDropDown title='storage' datas={properties.storage} setProperty={setStorage} property={storage}/>
        <label className='mt-3'> Photos </label>
        <div className="flex gap-3">
          {
            originalImages &&
            originalImages.map((pic) => {
              return (
                <div className='relative' key={pic}>
                  <img
                    className="w-28 h-28 border border-zinc-400 rounded-md"
                    src={pic}
                    alt="product"
                  />
                  <AiFillDelete size={22} onClick={() => handleDelete(pic)} className='absolute top-0 right-1 text-xl bg-slate-200 p-px mt-1 text-red-600 border border-slate-700 rounded-md cursor-pointer'/>
                </div>
              )
            })
          }
          {images.length > 0 &&
            images.map((image) => {
              return (
                <img
                  key={image}
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
            * Please upload an image of type jpg, jpeg, png and webp file
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
        <button className='btn mt-5 p-2 w-28' type='submit' disabled={loading}>Finish</button>
      </form>
    </div>
  )
}

export default ProductDetails
