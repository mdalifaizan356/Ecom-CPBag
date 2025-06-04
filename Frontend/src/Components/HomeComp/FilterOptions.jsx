import React from 'react'

const FilterOptions = ({ setShowSidebar, showSidebar, filters, setFilters }) => {

const filterOptions = {
  category: ['School Bag', 'College Bag', 'Travel Bag'],
  brand: ['Brand A', 'Brand B', 'Brand C'],
  size: ['Small', 'Medium', 'Large'],
  discount: ['10% Off or more', '25% Off or more', '50% Off or more']
};


  const handleCheckboxChange = (type, event) => {
    const value = event.target.value;
    setFilters(prev => {
      const values = prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value];
      return { ...prev, [type]: values };
    });
  };

  return (
    <>
    <div className=' flex justify-end m-2'>
          <button className="p-2 w-1/4 bg-blue-600 text-white rounded" onClick={() => setShowSidebar(!showSidebar)}>X</button>
    </div>
    <div className='p-5'>
      {Object.entries(filterOptions).map(([type, options]) => (
        <div key={type} className='mb-5'>
          <h1>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
          {options.map(option => (
            <label key={option} className='flex'>
              <input
                type="checkbox"
                value={option}
                className="checkbox"
                checked={filters[type]?.includes(option) || false}
                onChange={(e) => handleCheckboxChange(type, e)}
              />
               {option}
            </label>
          ))}
        </div>
      ))}
    </div>
    <div className='flex justify-between m-2'>
    <button className="p-2 bg-blue-600 text-white rounded" onClick={() => setShowSidebar(!showSidebar)}>Clear Filter</button>
      <button className="p-2 bg-blue-600 text-white rounded" onClick={() => setShowSidebar(!showSidebar)}>Show Result</button>
    </div>
    </>
  );
};

export default FilterOptions