import {useSelector} from 'react-redux'
import GalleryCollection from "../components/GalleryCollection"


const Gallery = () => {
  // React Hooks
  const {products} = useSelector(state => state.product)
  
  // Declared constants
  const title = "TOP CHOICES"

  return (
    <GalleryCollection title={title} products={products.slice(0,-1)}/>
  )
}

export default Gallery