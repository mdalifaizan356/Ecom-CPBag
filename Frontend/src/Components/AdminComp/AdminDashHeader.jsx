import React from 'react'
import { Link } from 'react-router-dom'

const AdminDashHeader = () => {
  return (
    <>
      <div className="navbar  fixed top-0 left-0 w-full bg-red-200 p-2 text-white z-50">
  <div className="flex-1">
  <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </label>
    <Link to="/admindashboard" className="btn btn-ghost text-xl">CP Bags</Link>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow">
        <li><Link to="adminprofile" className="justify-between">Profile{/* <span className="badge">New</span> */}</Link></li>
        <li><Link to="adminsettings">Settings</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  </div>
</div>
    </>
  )
}

export default AdminDashHeader