import React from 'react'
import { Link, Outlet} from "react-router-dom";
import UserSidebar from '../../Components/UserComp/UserSidebar';
import UserDashHeader from '../../Components/UserComp/UserDashHeader';
import HomeFooter from '../../Components/HomeComp/HomeFooter';

const UserDashLayout = () => {
  return (
    <>
      <UserDashHeader/>
      <main className='mt-16 lg:mt-16'>
        <Outlet />
      </main>
      <HomeFooter/> 
    </>
  )
}
export default UserDashLayout