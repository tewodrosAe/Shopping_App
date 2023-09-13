import ItemCategories from "../components/ItemCategories"
import Filter from "../components/Filter"
import ProductCard from "../components/ProductCard"

function GalleryCollection({title,result}) {
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
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default GalleryCollection