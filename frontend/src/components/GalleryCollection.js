import ItemCategories from "../components/ItemCategories"
import Filter from "../components/Filter"
import ProductCard from "../components/ProductCard"
import { useState } from "react"

function GalleryCollection({title,result, products}) {
    const [filtered, setFiltered] = useState('All Products')
    const [filteredTwo, setFilteredTwo] = useState('All Products')

    return (
            <div className="gallery">
                <div className="gallery-container">
                    <ItemCategories setFilteredTwo={setFilteredTwo} setFiltered={setFiltered}/>
                    <div className="product-gallery">
                        <h1> <span>{title.split(" ")[0]}</span> {title.split(" ")[1]}</h1>
                        { result && <div className="results">
                            Results for '{result}'
                        </div>}
                        {
                            filteredTwo === 'All Products' && 
                            <Filter setFiltered={setFiltered} filtered={filtered}/>
                        }
                        <div className="gallery-cards">
                            {   products.length > 0 ?
                                (filteredTwo === 'All Products' &&
                                products.filter(product => product.category.split(' ').slice(-1)[0] === filtered || filtered === 'All Products').map(product => <ProductCard key={product._id} product={product}/>)) ||
                                (products.filter(product => product.category.split('- ').slice(-1)[0] === filteredTwo || filteredTwo === 'All Products').map(product => <ProductCard key={product._id} product={product}/>))
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