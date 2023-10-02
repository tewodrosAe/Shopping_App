const DropDown = ({name, datas, dropDown, setDropDown, object}) => {
  const handleChange = (e) => {
    setDropDown(e.target.value)
  }
  return (
    <select defaultValue={dropDown} name="parent" className='dropdown' onChange={handleChange} multiple={false}>
        <option hidden>Choose a {name}</option>
        {
          datas.map(data => <option key={object ? data._id: data}>{object ? data.category: data} - {object ? data.parentCategory: data}</option>)
        }
    </select>
  )
}

export default DropDown