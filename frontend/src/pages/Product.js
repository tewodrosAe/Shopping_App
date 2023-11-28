import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { AiFillStar } from 'react-icons/ai'
import { path } from '../constants'

import Error from '../components/Error'
import { useSelector } from 'react-redux'
import UserComment from '../components/UserComment'
import Loading from '../components/Loading'
import ProductComment from '../components/ProductComment'
import ProductButton from '../components/ProductButton'
import ImageMagnifier from '../components/ImageMagnifier'

const Product = () => {
  // React hooks
  const {detail} = useSelector(state => state.userDetail)
  const [toggleDesc, setToggleDesc] = useState('specs')
  const {productId} = useParams()
  const [product, setProduct] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [bigImage, setBigImage] = useState(0)
  const navigate = useNavigate()
  const [storage, setStorage] = useState()
  const [colors, setColors] = useState()
  
  // Event handlers
  const handleToggle = (e) => {
    const toggleName = e.target.id
    setToggleDesc(toggleName)
  }
  const handleStorage = (e) => {
    setStorage(e.target.innerText.split('GB')[0])
  }
  const handleColor = (color) => {
    setColors(color)
  }
  // useEffect
  useEffect(() => {
    async function getProduct() {
      setLoading(true)
      try {
        const resp = await axios.get(`${path}/product/${productId}`)
        setProduct(resp.data)
        setBigImage(resp.data.picture[0])
        setStorage(String(resp.data.property.storage[0]))
        setColors(resp.data.property.color[0])
        setLoading(false)
      } catch (e) {
        console.log('Something went wrong!')
        setLoading(false)
        setError(true)
      }
      setLoading(false)
    }
    getProduct()
  },[productId])

  return (
    <>
    <div className={`${!loading ? 'hidden': ''}`}>
      <Loading  words={'Loading product...'}/>
    </div>
    <div className={`product-container ${!loading ? '': 'hidden'}`}>
      {!error ? (
        <>
          <div className="product-grid">
            <div className="product-image">
              <div className="product-image-col">
                {
                  product && product.picture.map(pic => <img key={pic} src={pic} alt="product" onClick={() => setBigImage(pic)}/>)
                }
              </div>
              <div className='big-image' >
                {/* <Magnifier src={`${bigImage}`} sizes= "(max-width: 40px) 10vw, (max-width: 1200px) 30vw, 360px" zoomFactor={1}/> */}
                <ImageMagnifier imgUrl={bigImage}/>
              </div>

            </div>
            <div className="product-info">
              <div className="product-info-top">
                <h4>{product && product.category.split('-')[0]}</h4>
              </div>
              <h2>{product &&  product.name}</h2>
              <div className="product-rating">
                <AiFillStar size={35} />
                {
                  product &&
                  product.comments.length > 0 ?
                  <div>
                    {(product.comments.reduce((result,comment) => result + comment.stars,0) / product.comments.length).toFixed(2)  } ({`${product.comments.length} ratings`})
                  </div>
                  :
                  <div>
                    No rating
                  </div>
                }
              </div>
              <div className="price">
                Price: ${product && product?.price}
              </div>
               {
              product &&
              product.property.storage.length > 0 &&
              product.property.storage[0] > 0 ?
              <ul className='product-storage'>
              Storage: {product.property.storage.sort((a,b) => a-b).map(s => <li key={s} onClick={handleStorage} className={`${storage === String(s) ? 'storage-clicked':''}`}> {s >= 1000 ? `${parseInt(s / 1000)}TB`: `${s}GB`} </li>)}
              </ul>:
              ''
              } 
              <div className="product-breakline" />
              <div className="product-color">
                <h3>Color</h3>
                <ul>
                  {product && product.property.color.map((color) => (
                    <li style={{ backgroundColor: color }} key={color} id={`${color === colors ? 'color-clicked': ''}`} onClick={() => handleColor(color)}/>
                  ))}
                </ul>
              </div>
              <div className="product-buttons">
                <ProductButton product={product} userId={detail && detail._id} userDetail={detail} color={colors} storage={parseInt(storage)}/>
              </div>
            </div>
          </div>
          <div className="product-description">
            <div className="product-description-toggle">
              <div
                id="specs"
                className={toggleDesc === 'specs' ? 'active-description' : ''}
                onClick={handleToggle}
              >
                Specs
              </div>
              <div id="toggle-divider" />
              <div
                id="disc"
                className={toggleDesc === 'disc' ? 'active-description' : ''}
                onClick={handleToggle}
              >
                Reviews
              </div>
              <div id="toggle-divider-bottom" />
            </div>
            <>
            { 
              toggleDesc === 'specs' ?
              <div className="product-description-details">
                <h2> Key Features</h2>
                <p>
                  <strong>
                  {
                    product && product.description.split('More details')[0]
                  }
                  </strong>
                </p>
                <h2> More Details </h2>
                <p>
                {
                    product && product.description.split('More details')[1]
                  }
                </p>
              </div> :
              <div className="product-review">
                {
                   detail ?
                    <ProductComment productId={productId} detail={detail} setProduct={setProduct}/>:
                  <button className='product-review-button' style={{marginLeft: '43%'}} onClick={() => navigate('/user/login')}>Login to Comment</button>
                }
                <div className='product-breakline' style={{ marginTop: '5vh', opacity:0.5}}/>
                <div className='product-breakline' style={{opacity:0.5}}/>
                <div className="product-comments">
                  {
                    product.comments.map(comment =>  <UserComment key={comment} comment={comment}/>)
                  }
                </div>
              </div>
            }
            </>
          </div>{' '}
        </>
      ) : (
        <Error message={'Not Found!!'}/>
      )}
    </div>
    </>
  )
}

export default Product
