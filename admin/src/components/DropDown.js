const DropDown = ({name, datas, dropDown, setDropDown}) => {
  const handleChange = (e) => {
    setDropDown({...dropDown,[name]:e.target.value})
  }
  return (
    <select defaultValue={dropDown} name="parent" className='dropdown' onChange={handleChange} multiple={false}>
        <option hidden>Choose a {name}</option>
        {
          datas.map(data => <option key={data}>{data}</option>)
        }
    </select>
  )
}

export default DropDown