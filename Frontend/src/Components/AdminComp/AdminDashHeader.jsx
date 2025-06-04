import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu } from "lucide-react";

const AdminDashHeader = () => {
  const navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem("role");
    navigate("/"); 
  }

  
  return (
    <>
    <header className="border-b border-red-300 rounded-tl-3xl rounded-tr-3xl fixed w-full top-0 backdrop-blur-lg bg-yellow-500 z-999 mb-16">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden"><Menu/></label>
            <div className="hidden lg:flex items-center gap-8">
                        <Link to="/userdashboard" className="flex items-end gap-0.5 hover:opacity-80 transition-all">
                          <div className="size-16 rounded-lg bg-primary/10 flex items-center justify-center avatar">
                            <img src="../../../public/logo.jpeg" alt="Product"/>
                          </div>
                          <h1 className="text-lg font-bold" style={{color:"red", fontSize:"20px"}}>Bag Agency</h1>
                        </Link>
                      </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
            {/* <Link to="userwishlist" className={`btn btn-sm gap-2 transition-colors`}><Heart className="size-5" /><span className="hidden sm:inline">Wishlist</span></Link>
            <Link to="usercart" className={`btn btn-sm gap-2 transition-colors`}><ShoppingCart className="size-5" /><span className="hidden sm:inline">Cart</span></Link> */}
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

export default AdminDashHeader
  

















// import React from 'react'
// import { Link } from 'react-router-dom'

// const AdminDashHeader = () => {
//   return (
//     <>
//     <div className="navbar  fixed top-0 left-0 w-full bg-blue-600 p-2  z-50">
//       <div className="flex-1">
//       <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden">X</label>
//     </div>
//     <div className="flex-none">
//     <div className="dropdown dropdown-end">
//       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//         <div className="w-10 rounded-full">
//           <img
//             alt="Tailwind CSS Navbar component"
//             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//         </div>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-blue-500 rounded-box z-[1] mt-5 w-40 p-2 shadow">
//         <li><Link to="adminprofile" className="justify-between">Profile{/* <span className="badge">New</span> */}</Link></li>
//         <li><Link to="adminsettings">Settings</Link></li>
//         <li><Link to="/">Logout</Link></li>
//       </ul>
//     </div>
//   </div>
// </div>
//     </>
//   )
// }

// export default AdminDashHeader