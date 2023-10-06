import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBookmarkPlusFill, BsFillCartPlusFill } from 'react-icons/bs'
import { colors, path } from '../constants'
import Magnifier from 'react-magnifier'
import Error from '../components/Error'

const Product = () => {
  // React hooks
  const [toggleDesc, setToggleDesc] = useState('specs')
  const {productId} = useParams()
  const [product, setProduct] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [bigImage, setBigImage] = useState(0)

  // Event handlers
  const handleToggle = (e) => {
    const toggleName = e.target.id
    setToggleDesc(toggleName)
  }

  // useEffect
  useEffect(() => {
    async function getProduct() {
      setLoading(true)
      try {
        const resp = await axios.get(`${path}/product/${productId}`)
        setProduct(resp.data)
        setBigImage(resp.data.picture[0])
        setLoading(false)
      } catch (e) {
        console.log('Something went wrong!')
        setLoading(false)
        setError(true)
      }
    }
    getProduct()
  },[])

  return (
    <div className="product-container">
      {!error ? (
        <>
          <div className="product-grid">
            <div className="product-image">
              <div className="product-image-col">
                {
                  product && product.picture.map(pic => <img src={pic} alt="product" onClick={() => setBigImage(pic)}/>)
                }
              </div>
              <div className='big-image' >
                <Magnifier src={`${bigImage}`} sizes= "(max-width: 40px) 10vw, (max-width: 1200px) 30vw, 360px" zoomFactor={1}/>
              </div>

            </div>
            <div className="product-info">
              <div className="product-info-top">
                <h4>{product && product.category.split('-')[0]}</h4>
              </div>
              <h2>{product &&  product.name}</h2>
              <div className="product-rating">
                <AiFillStar size={35} />
                4.6 (3.5k ratings)
              </div>
              <p> Visit apple store </p>
              <div className="product-breakline" />
              <div className="product-color">
                <h3>Color</h3>
                <ul>
                  {product && product.property.color.map((color) => (
                    <li style={{ backgroundColor: color }} />
                  ))}
                </ul>
              </div>
              <div className="product-buttons">
                <button>
                  <BsFillBookmarkPlusFill /> Save
                </button>
                <button>
                  <BsFillCartPlusFill /> Add to Cart
                </button>
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
            <div className="product-description-details">
              <h2> Key Features</h2>
              <p>
                Brighter 6.1” Super Retina XDR display¹ featuring Always-On,
                which keeps your info at a glance Dynamic Island, a magical new
                way to interact with iPhone Emergency SOS via satellite² and
                Crash Detection — groundbreaking features designed to save
                lives³ 48MP Main camera with an advanced quad-pixel sensor for
                up to 4x the resolution A16 Bionic chip — superfast and
                superefficient for amazing all-day battery life
              </p>
            </div>
          </div>{' '}
        </>
      ) : (
        <Error message={'Not Found!!'}/>
      )}
    </div>
  )
}

export default Product
