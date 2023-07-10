import ItemCategories from "../components/ItemCategories"
import Filter from "../components/Filter"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"

function GalleryCollection({title,description}) {
  return (
        <div className="gallery">
            <div className="gallery-container">
                <ItemCategories/>
                <div className="product-gallery">
                    <h1> <span>{title.split(" ")[0]}</span> {title.split(" ")[1]}</h1>
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