import React from 'react'
import {useSelector} from 'react-redux'
import GalleryCollection from '../components/GalleryCollection'

function Sale() {
  // React Hooks
  const {products} = useSelector(state => state.product)

  // Declared Constants
  const title = "ON SALE"  

  return (
    <GalleryCollection title={title} products={products}/>
  )
}

export default Sale