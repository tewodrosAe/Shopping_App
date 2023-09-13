import React, { useState } from 'react'
import { filters } from '../constants'
/* import {FaFilter} from 'react-icons/fa' */

function Filter() {
  const [isActive, setIsActive] = useState(filters[0])
  const filterClicked = (filter) => {
    setIsActive(filter)
  }
  return (
    <div className='products-filter'>
        <ul>
          {filters?.map((filter) => <li key={filter} className={isActive === filter ? 'bold-filter' : ''} onClick={()=> filterClicked(filter)}> { filter } </li>)}
        </ul>
        {/* <div className='filter'><FaFilter size={10}/><small>Filter</small></div> */}
      </div>
  )
}

export default Filter