import GalleryCollection from "../components/GalleryCollection"


const Search = ({result}) => {
  const title = "DISCOVER"
  return (
    <GalleryCollection title={title} result={result}/>
  )
}

export default Search