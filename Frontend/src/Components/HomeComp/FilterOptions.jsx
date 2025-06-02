import React from 'react'

const FilterOptions = ({setShowSidebar, showSidebar}) => {
  return (
    <>
    <div className=' flex justify-end m-2'>
          <button className="p-2 bg-blue-600 text-white rounded" onClick={() => setShowSidebar(!showSidebar)}>X</button>
    </div>
    <div className='m-2'>
    <div>
      <h1>Category</h1>
      <div className='flex flex-col mb-5'>
        <label><input type="checkbox" className="checkbox"/> School Bag</label>
        <label><input type="checkbox" className="checkbox"/> College Bag</label>
        <label><input type="checkbox" className="checkbox"/> Travel Bag</label>
      </div>
    </div>
    <div>
      <h1>Size</h1>
      <div className='flex flex-col mb-5'>
        <label><input type="checkbox" className="checkbox"/> Big</label>
        <label><input type="checkbox" className="checkbox"/> Medium</label>
        <label><input type="checkbox" className="checkbox"/> Small</label>
      </div>
    </div>
    <div>
      <h1>Brand</h1>
      <div className='flex flex-col mb-5'>
        <label><input type="checkbox" className="checkbox"/> School Bag</label>
        <label><input type="checkbox" className="checkbox"/> College Bag</label>
        <label><input type="checkbox" className="checkbox"/> Travel Bag</label>
      </div>
    </div>
    <div>
      <h1>Price</h1>
      <div className='flex flex-col mb-5'>
        <label>
        Min
        <input type="range" min="100" max="10000" step="100" className="range text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]"/>
        Max
        </label>
      </div>
    </div>
    <div>
      <h1>Discount</h1>
      <div className='flex flex-col mb-5'>
        <label><input type="checkbox" className="checkbox"/> 10% Off or more</label>
        <label><input type="checkbox" className="checkbox"/> 25% Off or more</label>
        <label><input type="checkbox" className="checkbox"/> 35% Off or more</label>
        <label><input type="checkbox" className="checkbox"/> 50% Off or more</label>
        <label><input type="checkbox" className="checkbox"/> 60% Off or more</label>
        <label><input type="checkbox" className="checkbox"/> 70% Off or more</label>
      </div>
    </div>
    <div className='flex justify-between m-2'>
    <button className="p-2 bg-blue-600 text-white rounded" onClick={() => setShowSidebar(!showSidebar)}>Clear Filter</button>
      <button className="p-2 bg-blue-600 text-white rounded" onClick={() => setShowSidebar(!showSidebar)}>Show Result</button>
    </div>
  </div>
    </>
  )
}

export default FilterOptions