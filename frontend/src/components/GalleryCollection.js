import ItemCategories from "../components/ItemCategories"
import Filter from "../components/Filter"
import ProductCard from "../components/ProductCard"

function GalleryCollection({title,result, products}) {
    return (
            <div className="gallery">
                <div className="gallery-container">
                    <ItemCategories/>
                    <div className="product-gallery">
                        <h1> <span>{title.split(" ")[0]}</span> {title.split(" ")[1]}</h1>
                        { result && <div className="results">
                            Results for '{result}'
                        </div>}
                        <Filter/>
                        <div className="gallery-cards">
                            {   products.length > 0 ?
                                products.map(product => <ProductCard key={product._id} product={product}/>) :
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