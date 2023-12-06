import ItemCategories from "../components/ItemCategories"
import Filter from "../components/Filter"
import ProductCard from "../components/ProductCard"
import { useState } from "react"
import { useLocation } from "react-router-dom"

function GalleryCollection({title,result, products}) {
    // React hooks
    const [filteredTwo, setFilteredTwo] = useState('All Products')

    return (
            <div className="gallery">
                <div className="gallery-container">
                    <ItemCategories setFilteredTwo={setFilteredTwo}/>
                    <div className="product-gallery">
                        <h1> <span>{title.split(" ")[0]}</span> {title.split(" ")[1]}</h1>
                        { result && <div className="results">
                            Results for '{result}'
                        </div>}
                        
                        <div className="gallery-cards">
                            {   products.length > 0 ?
                                products.filter(product => product.category.split('- ').slice(-1)[0] === filteredTwo || filteredTwo === 'All Products').map(product => <ProductCard key={product._id} product={product}/>)
                                :
                                <div className="not-found">
                                    Ooops! No product found
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default GalleryCollection