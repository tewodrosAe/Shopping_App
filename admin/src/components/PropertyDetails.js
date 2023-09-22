const PropertyDetails = () => {
  return (
    <div className="flex flex-col mt-2 gap-1">
        <label ><span className="p-1 pr-20 border">Color:</span> <input type="text" className="product-input w-2/6"/></label>
        <label ><span className="p-1 pr-8 border">Storage(GB):</span> <input type="text" className="product-input w-2/6"/></label>
    </div>
  )
}

export default PropertyDetails