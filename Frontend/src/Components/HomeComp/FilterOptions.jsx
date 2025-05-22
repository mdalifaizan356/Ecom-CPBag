import React from 'react'
import {X} from "lucide-react"

const FilterOptions = ({setShowSidebar, showSidebar}) => {
  return (

    <div><button className="mb-4 p-2 bg-blue-600 text-white rounded md:hidden" onClick={() => setShowSidebar(!showSidebar)}><X/></button>
    <h1>Hiii</h1>
    </div>
  )
}

export default FilterOptions