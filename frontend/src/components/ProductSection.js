import ProductCard from './ProductCard'
import UpcomingSection from './UpcomingSection'
import BestSellers from './BestSellers'
import Filter from './Filter'
import { useEffect, useState } from 'react'

function ProductSection({products}) {
  // React hooks
  const [filtered, setFiltered] = useState('All Products')
  const [filteredProduct, setFilteredProduct] = useState([]) 

  // useEffects
  useEffect(() => {
    setFilteredProduct(products.slice(1).slice(-10).filter((product => product.category.split(' ').slice(-1)[0] === filtered || filtered === 'All Products')))
  },[filtered, products])

  return (
    <>
    <div className='products-section'>
      <h1 className='products-section-head '>NEW TECH</h1>  
      <Filter filtered={filtered} setFiltered={setFiltered}/>
      <div className='product-cards'>
        { filteredProduct.length > 0 ? 
          filteredProduct.map(product => <ProductCard key={product._id} product={product}/>):
          <div style={{marginTop: '3vh', fontSize: 14}}>
            No new tech for the filter chosen...
          </div>
        }
      </div>
    </div>
    <UpcomingSection/>
    <BestSellers products={products}/>
    </>
  )
}

export default ProductSection