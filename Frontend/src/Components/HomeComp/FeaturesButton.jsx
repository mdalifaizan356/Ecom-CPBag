import React, { Fragment } from 'react'
import { Menu } from "lucide-react"

const FeaturesButton = ({setShowSidebar, showSidebar}) => {
  return (
    <>
      <div className='flex justify-between m-4 mb-2'>
        <div>
          <button className="p-2 bg-blue-600 text-white rounded" onClick={() => setShowSidebar(!showSidebar)}>Filter</button>
        </div>
        <div className='border border-gray-100 rounded w-1/2'>
          <input className="w-full p-2 text-black rounded" placeholder='Search'/>
        </div>
        <div>
          <button className="p-2 bg-blue-600 text-white rounded" onClick={() => setShowSidebar(!showSidebar)}>Features</button>
        </div>
      </div>
    </>
  )
}

export default FeaturesButton