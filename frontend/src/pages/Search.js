import { useSelector } from "react-redux"
import GalleryCollection from "../components/GalleryCollection"
import { useSearchParams } from "react-router-dom"


const Search = ({result}) => {
  // React Hooks
  const {products} = useSelector(state => state.product)
  const [params, setparams] = useSearchParams()
  // Declared a constant
  const title = "SEARCH"
  const search = params.get('q')

  return (
    <GalleryCollection title={title} result={search} products={products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()))}/>
  )
}

export default Search