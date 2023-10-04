const DropDown = ({name, datas, dropDown, setDropDown, object}) => {
  const handleChange = (e) => {
    setDropDown(e.target.value)
  }
  return (
    <select name="parent" className='dropdown' onChange={handleChange} multiple={false}>
        <option hidden>{dropDown ? dropDown:` Choose a ${name}`}</option>
        {
          datas.map(data => <option key={object ? data._id: data}>{object ? data.category: data} - {object ? data.parentCategory: data}</option>)
        }
    </select>
  )
}

export default DropDown