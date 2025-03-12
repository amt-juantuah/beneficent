"use client"

import React, { useEffect, useState } from 'react'
import { ArrowBigDown, ArrowBigUp } from 'lucide-react'
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline'
import { BiArrowToTop } from 'react-icons/bi'

const TableOne = ({item}) => {
    const [display, setDisplay] = useState(["hidden", "block"])

    const { title, detail, lists } = item

    const setDisplayFunction = () => {
        setDisplay((display) => [display[1], display[0]])
    }

  return (
    <div className="w-full group rounded mb-10 border border-indigo-500 transition-all duration-500">
        <div className="w-full center justify-between bg-indigo-500 group-hover:bg-transparent rounded p-4 flex flex-row justify-between items-center border-b border-indigo-500">
            <h2 className='text-white group-hover:text-indigo-500 text-xl transition-all duration-500'>{title}</h2>
            <div className={`${display[0] === "hidden" && "rotate-180"} cursor-pointer text-white group-hover:text-indigo-500 text-xl transition-all duration-200`} onClick={setDisplayFunction}>&#9650;</div>
            {/* <div className={`${display[1]} cursor-pointer text-white group-hover:text-indigo-500 text-xl transition-all duration-500`} onClick={setDisplayFunction}>&#9660;</div> */}
        </div>
        <div className={`${display[0] === "hidden" ? "max-h-0" : "max-h-96" } transition-all duration-1000 overflow-hidden`}>
          <p className={` p-4`}>{detail}</p>
          <ul className={` p-4 list-disc list-inside`}>
            {lists?.map((each, index) => (<li className='pt-1 text-gray-500 text-lg' key={index}>{each}</li>))}
          </ul>
        </div>
    </div>
  )
}

export default TableOne