import Nav from "../components/Nav"
import ItemCategories from "../components/ItemCategories"
import Filter from "../components/Filter"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"


const Gallery = () => {
  return (
    <>
      <Nav/>
      <div className="gallery-container">
        <ItemCategories/>
        <div className="product-gallery">
          <h1> <span>TOP</span> CHOICES</h1>
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
      <Footer/>
    </>
  )
}

export default Gallery