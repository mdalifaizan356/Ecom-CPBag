import React from 'react'
import { Link } from 'react-router-dom'
import { LogOut, ShoppingCart, Briefcase, User, LogIn, Heart } from "lucide-react";

const UserDashHeader = () => {
  return (
    <>
    <div className="navbar  fixed top-0 left-0 w-full bg-blue-600 p-2  z-50">
  <div className="flex-1">
    <Link to="/admindashboard" className="btn btn-ghost text-xl">CP Bags</Link>
  </div>
  <div className="flex items-center gap-2">
            <Link to="userwishlist" className={`btn btn-sm gap-2 transition-colors`}><Heart className="size-5" /><span className="hidden sm:inline">Wishlist</span></Link>
            <Link to="usercart" className={`btn btn-sm gap-2 transition-colors`}><ShoppingCart className="size-5" /><span className="hidden sm:inline">Cart</span></Link>
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
      <ul tabIndex={0} className="menu menu-sm dropdown-content bg-blue-500 rounded-box z-[1] mt-5 w-40 p-2 shadow">
        <li><Link to="adminprofile" className="justify-between">Profile</Link></li>
        <li><Link to="adminprofile" className="justify-between">My Address</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  </div>
</div>
    </>
  )
}

export default UserDashHeader
