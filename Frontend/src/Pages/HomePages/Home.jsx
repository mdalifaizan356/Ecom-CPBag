import { useState } from 'react';
import HeroBanner from '../../Components/HomeComp/HeroBanner';
import FeaturesButton from '../../Components/HomeComp/FeaturesButton';
import FilterOptions from '../../Components/HomeComp/FilterOptions';
import AllProducts from '../../Components/HomeComp/AllProduct';

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [filters, setFilters] = useState({
    category: [],
    size: [],
    brand: [],
    priceRange: [100, 10000],
    discount: [],
  });

  return (
  <>
    <HeroBanner />
    <div className="sticky top-16 z-50 shadow-md bg-base-100">
      <FeaturesButton setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>
    </div>
    <div className="flex">
    <div className={`text-black bg-amber-100 transition-all duration-300 ease-in-out ${showSidebar ? 'w-full md:w-1/4' : 'w-0 overflow-hidden'} fixed md:static top-0 left-0 h-full z-90 md:z-40`}>
      <FilterOptions setShowSidebar={setShowSidebar} showSidebar={showSidebar} filters={filters} setFilters={setFilters} />
    </div>
    <div className={`${showSidebar ? 'md:w-3/4' : 'w-full'} transition-all duration-300 md:ml-0`}>
      <AllProducts filters={filters}/>
    </div>
    </div>
  </>
)
};

export default Home;
