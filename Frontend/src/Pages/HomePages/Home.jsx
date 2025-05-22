import {useState} from 'react';
import BannerArrow from '../../Components/HomeComp/BannerArrow';
import HeroBanner from '../../Components/HomeComp/HeroBanner';
import OfferSlide from '../../Components/HomeComp/OfferSlide';
import BrandProduct from '../../Components/HomeComp/BrandProduct';
import Category from '../../Components/HomeComp/Category';
import FeaturesButton from '../../Components/HomeComp/FeaturesButton';
import FilterOptions from '../../Components/HomeComp/FilterOptions';
import AllProducts from '../../Components/HomeComp/AllProduct';

const Home = () => {
    const [showSidebar, setShowSidebar] = useState(false);

  return (
  <>
  <div>
    <HeroBanner/>
    <FeaturesButton setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>
  </div>
  <div className='flex'>
    <div className={`
      bg-gray-800 text-white transition-all duration-300 ease-in-out 
      ${showSidebar ? 'w-full md:w-1/4' : 'w-0 overflow-hidden'} 
      fixed md:static top-0 left-0 h-full z-50
    `}>
      <FilterOptions setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>
    </div>  
    <div className={`${showSidebar ? 'md:w-3/4' : 'w-full'} transition-all duration-300 md:ml-0`}>
      <AllProducts/>
    </div>
  </div>
</>
  )
}

export default Home