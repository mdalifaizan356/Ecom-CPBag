import React from 'react'
import { Link, Outlet} from "react-router-dom";
import AdminDashHeader from '../../Components/AdminComp/AdminDashHeader';
import AdminSidebar from '../../Components/AdminComp/AdminSidebar';

const AdminDashLayout = () => {
  return (
    <>
    <div className="drawer lg:drawer-open">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <AdminDashHeader/>
    <div className="drawer-content">
    <main className='mt-16 lg:mt-16'>
    <Outlet />
    </main>
    </div>
    <div className="drawer-side mt-16 h-screen z-50">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <AdminSidebar/>
    </div>
</div>
    </>
  )
}
export default AdminDashLayout