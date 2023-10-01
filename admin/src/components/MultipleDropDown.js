import React, { useEffect, useState } from 'react'
import {AiOutlineDown} from 'react-icons/ai'
import { BiCheckbox } from 'react-icons/bi'
import {BsFillCheckSquareFill} from 'react-icons/bs'

const MultipleDropDown = ({title,property,datas,setProperty}) => {
    // React hooks
    const [check, setCheck] = useState({})
    const [view, setview] = useState(false)

    // Event handlers
    const handleCheck = (e) => {
        const name = e.target.getAttribute('name')
        const prev = check[name]
        if(prev){
            setProperty(property.filter(c => c !== name))
        }else{
            setProperty([...property, name])
        }
        setCheck({...check,[e.target.getAttribute('name')]: !prev})
    }
    const handleView = () => {
        setview(view => !view)
    }

    // useEffect
    useEffect(() => {
        for(let i = 0; i < datas.length; i++){
            check[datas[i]] = false
        }
    },[])

    return (
        <div className='w-3/4' >
            <div className="flex h-12 items-center justify-between px-4 rounded-lg cursor-pointer bg-white shadow-md " onClick={handleView}>
                <span className="text-base text-slate-600">{property.length <= 0 ? "Select Language": property.toString()}</span>
                <span className='border rounded-full p-1 border-slate-400'>
                    <AiOutlineDown size={17} color='black'/>
                </span>
            </div>
            {
                view &&
                <ul className="relative mt-4 rounded-lg p-4 bg-white shadow-lg">
                    {
                        datas.map(d => { 
                            return(
                            <li className="item" name={d} key={d} onClick={handleCheck}>
                                <span className="checkbox ">
                                    {
                                        check[d] ? 
                                        <BsFillCheckSquareFill size={15} className='ml-1 text-blue-700'/>:
                                        <BiCheckbox size={22} className='text-slate-500'/>
                                    }
                                </span>
                                <span className="item-text">{d}</span>
                            </li>
                        )
                        })
                    }
                </ul>
            }
        </div>
  )
}

export default MultipleDropDown