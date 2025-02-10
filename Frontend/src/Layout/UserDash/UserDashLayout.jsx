import React from 'react'
import { Link, Outlet} from "react-router-dom";
import UserSidebar from '../../Components/UserComp/UserSidebar';
import UserDashHeader from '../../Components/UserComp/UserDashHeader';

const UserDashLayout = () => {
  return (
    <>
    <div className="drawer lg:drawer-open">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <main className='mt-18 lg:mt-18'>
    <UserDashHeader/>
    <Outlet />
    </main>
  </div>
  <div className="drawer-side mt-18 lg:mt-16">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <UserSidebar/>
  </div>
</div>
    </>
  )
}
export default UserDashLayout