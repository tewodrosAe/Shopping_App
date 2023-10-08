import React, { useState } from 'react'
import { filters } from '../constants'
/* import {FaFilter} from 'react-icons/fa' */

function Filter({filtered, setFiltered}) {
  const [isActive, setIsActive] = useState('All Products')
  const filterClicked = (filter) => {
    setIsActive(filter)
    setFiltered(filter)
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