import Category from "./Category"

const CategoriesList = ({title,category}) => {
  return (
    <div className='bg-white my-6 text-text1 px-5 py-3 pb-6 text-black font-bold shadow-md'>
        <div className="grid grid-cols-3">
            <h1 className=' text-black/60'>{title}</h1>
            <h1 className=' text-black/60 mx-auto'>PARENT CATEGORY</h1>
        </div>
        <div className='w-full h-single bg-black/20 mt-1 mb-3'/>
        <div className='flex flex-col gap-5'> 
            {
              category.map(c => <Category key={c._id} data={c}/>)
            }
        </div>
      </div>
  )
}

export default CategoriesList