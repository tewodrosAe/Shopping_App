const DropDown = ({name, data, dropDown, setDropDown}) => {
  const handleChange = (e) => {
    setDropDown({...dropDown,[name]:e.target.value})
  }
  return (
    <select defaultValue={dropDown} name="parent" className='dropdown' onChange={handleChange}>
        <option hidden>Choose a {name}</option>
        <option>Volvo</option>
        <option >Saab</option>
        <option >Mercedes</option>
        <option >Audi</option>
    </select>
  )
}

export default DropDown