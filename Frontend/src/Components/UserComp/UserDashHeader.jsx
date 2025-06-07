import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, ShoppingCart, Briefcase, User, LogIn, Heart } from "lucide-react";
import { AuthContext } from '../../Context/AuthContext';

const UserDashHeader = () => {
  const navigate = useNavigate();
  const { userData } = useContext(AuthContext);

  const handleLogout = ()=>{
    localStorage.removeItem("role");
    navigate("/"); 
  }

  
  return (
    <>
    <header
      className="border-b border-base-300 fixed w-full top-0 z-50 backdrop-blur-lg bg-white">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">

          <div className="flex items-center gap-8">
            <Link to="/userdashboard" className="flex items-end gap-0.5 hover:opacity-80 transition-all">
              <div className="size-16 rounded-lg bg-primary/10 flex items-center justify-center avatar">
                <img src="../../../public/logo.jpeg" alt="Product"/>
                {/* <h1>{userData?.Name || "Guest"}</h1> */}
              </div>
              <h1 className="text-lg font-bold" style={{color:"red", fontSize:"20px"}}>Bag Agency</h1>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {/* <Link to="/login" className={`btn btn-sm gap-2 transition-colors`}><LogIn className="w-4 h-4" /><span className="hidden sm:inline">Login</span></Link> */}
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
            // src={userData?.ProfilePic || "../../../public/limitedOffer.jpg"} />
            src="../../../public/limitedOffer.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content bg-blue-500 rounded-box z-[1] mt-5 w-40 p-2 shadow">
        <li><Link to="userprofile" className="justify-between">Profile</Link></li>
        <li><Link to="useraddress" className="justify-between">My Address</Link></li>
        <li><Link to="userorders" className="justify-between">My Orders</Link></li>
        {/* <li><Link to="/">Logout</Link></li> */}
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul> 
    </div>
  </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default UserDashHeader

  