import React from 'react'
import {AiOutlineDown} from 'react-icons/ai'
import {BsFillCheckSquareFill} from 'react-icons/bs'

const MultipleDropDown = () => {
    const data = [
        'Red',
        'Blue',
        'Gotty',
        'Lame Ruhama',
        'Yisak'
    ]
  return (
    <div>
        <div className="flex h-12 items-center justify-between px-4 rounded-lg cursor-pointer bg-white shadow-md">
            <span className="text-base text-slate-600">Select Language</span>
            <span className='border rounded-full p-1 border-slate-400'>
                <AiOutlineDown size={17} color='black'/>
            </span>
        </div>

        <ul className="relative mt-4 rounded-lg p-4 bg-white shadow-lg">
            {
                data.map(d => {
                    return(
                    <li className="item" key={d}>
                        <span className="checkbox">
                            <BsFillCheckSquareFill/>
                        </span>
                        <span className="item-text">{d}</span>
                    </li>
                )
                })
            }
        </ul>
    </div>
  )
}

export default MultipleDropDown