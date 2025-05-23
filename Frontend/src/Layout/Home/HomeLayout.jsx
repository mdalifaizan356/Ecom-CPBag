import React from 'react'
import { Outlet} from "react-router-dom";
import HomeHeader from '../../Components/HomeComp/HomeHeader';
import HomeFooter from '../../Components/HomeComp/HomeFooter';
import UserDashHeader from '../../Components/UserComp/UserDashHeader';


const HomeLayout = () => {
  // const Role = localStorage.getItem("role");
  return (
    <> 
    {/* {Role==="User"? <UserDashHeader/> : <HomeHeader/>} */}
    <HomeHeader/>
    <main className='mt-16'> 
      <Outlet/>
    </main> 
    <HomeFooter/>
    </>
  )
}

export default HomeLayout