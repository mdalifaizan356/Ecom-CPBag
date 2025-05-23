import React from 'react'
import { Menu } from "lucide-react"

const FeaturesButton = ({setShowSidebar, showSidebar}) => {
  return (
    <>
       <div className="stats shadow w-full">
                <div className="flex-1 bg-gray-100 p-2">
                  <button className="p-2 bg-blue-600 text-white rounded" onClick={() => setShowSidebar(!showSidebar)}>Filter</button>
                </div>
        </div>
    </>
  )
}

export default FeaturesButton