import React from 'react'
import { Outlet} from "react-router-dom";
import HomeHeader from '../../Components/HomeComp/HomeHeader';
import HomeFooter from '../../Components/HomeComp/HomeFooter';


const HomeLayout = () => {
  return (
    <> 
    <HomeHeader/>
    <main className='mt-16'>
      <Outlet/>
    </main> 
    <HomeFooter/>
    </>
  )
}

export default HomeLayout