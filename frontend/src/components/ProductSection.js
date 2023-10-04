import ProductCard from './ProductCard'
import UpcomingSection from './UpcomingSection'
import BestSellers from './BestSellers'
import Filter from './Filter'

function ProductSection({products}) {
  return (
    <>
    <div className='products-section'>
      <h1 className='products-section-head '>NEW TECH</h1>  
      <Filter/>
      <div className='product-cards'>
        {/* <ProductCard number={'1'}/>
        <ProductCard number={'2'}/>
        <ProductCard number={'3'}/>
        <ProductCard number={'4'}/> */}
        
        {
          products.map(product => <ProductCard key={product._id} product={product}/>)
        }
      </div>
    </div>
    <UpcomingSection/>
    <BestSellers />
    </>
  )
}

export default ProductSection