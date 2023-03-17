import React from 'react'
import {FaFilter} from 'react-icons/fa'

function Filter() {
  return (
    <div className='products-filter'>
        <ul>
          <li className='bold'>All Products</li>
          <li>Phones</li>
          <li>Computers</li>
          <li>Others</li>
        </ul>
        <div><FaFilter size={10}/><small>Filter</small></div>
      </div>
  )
}

export default Filter