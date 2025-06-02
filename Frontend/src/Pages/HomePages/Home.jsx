import { useState } from 'react';
import HeroBanner from '../../Components/HomeComp/HeroBanner';
import FeaturesButton from '../../Components/HomeComp/FeaturesButton';
import FilterOptions from '../../Components/HomeComp/FilterOptions';
import AllProducts from '../../Components/HomeComp/AllProduct';

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [filterData, setFilterData] = useState({
    Category: [],
  });

  return (
  <>
    <HeroBanner />
    <div className="sticky top-16 z-50 bg-white shadow-md">
      <FeaturesButton setShowSidebar={setShowSidebar} showSidebar={showSidebar} filterData={filterData} setFilterData={setFilterData}/>
    </div>
    <div className="flex">
    <div className={`bg-gray-600 text-white transition-all duration-300 ease-in-out ${showSidebar ? 'w-full md:w-1/4' : 'w-0 overflow-hidden'} fixed md:static top-0 left-0 h-full z-900`}>
      <FilterOptions setShowSidebar={setShowSidebar} showSidebar={showSidebar} filterData={filterData} setFilterData={setFilterData}/>
    </div>
    <div className={`${showSidebar ? 'md:w-3/4' : 'w-full'} transition-all duration-300 md:ml-0`}>
      <AllProducts filterData={filterData} />
    </div>
    </div>
  </>
)
};

export default Home;
