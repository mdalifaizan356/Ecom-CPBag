import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Loader } from 'lucide-react';
import { Toaster } from "react-hot-toast";

import HomeLayout from './Layout/Home/HomeLayout';
import Home from './Pages/HomePages/Home';
import Login from './Pages/GuestPages/Login';
import SignUp from './Pages/GuestPages/SignUp';
import ResetPassword from './Pages/GuestPages/ResetPassword';
import PNF from './Pages/PNF';

import UserDashLayout from './Layout/UserDash/UserDashLayout';
import UserCart from './Pages/UserPages/UserCart';
import UserWishlist from './Pages/UserPages/UserWishlist';
import UserIndex from './Pages/UserPages/UserIndex';
import UserAddress from './Pages/UserPages/UserAddress';
import UserSetting from './Pages/UserPages/UserSetting';
import UserProfile from './Pages/UserPages/UserProfile';
import UserOrders from './Pages/UserPages/UserOrders';
import Checkout from './Pages/UserPages/Checkout';

import AdminDashLayout from './Layout/AdminDash/AdminDashLayout';
import AdminIndex from './Pages/AdminPages/PersonalPages/AdminIndex';
import AdminProfile from './Pages/AdminPages/PersonalPages/AdminProfile';
import AdminSettings from './Pages/AdminPages/PersonalPages/AdminSettings';
import AllUsers from './Pages/AdminPages/BusinessPages/ManageUsers/AllUsers';
import AllProducts from './Pages/AdminPages/BusinessPages/ManageProducts/AllProducts';
import AddProduct from './Pages/AdminPages/BusinessPages/ManageProducts/AddProduct';
import EditProduct from './Pages/AdminPages/BusinessPages/ManageProducts/EditProduct';



function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/resetpassword" element={<ResetPassword/>}/>
 
        <Route path="/userdashboard" element={<UserDashLayout />}> 
          <Route index element={<UserIndex />} />
          <Route path="usercart" element={<UserCart />} />
          <Route path="userwishlist" element={<UserWishlist  />} />
          <Route path="userprofile" element={<UserProfile />} /> 
          <Route path="userorders" element={<UserOrders />} />
          <Route path="useraddress" element={<UserAddress />} />
          <Route path="usersettings" element={<UserSetting />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="/admindashboard" element={<AdminDashLayout />}>
          <Route index element={<AdminIndex />} />
          <Route path="adminprofile" element={<AdminProfile />} /> 
          <Route path="adminsettings" element={<AdminSettings />} />
          <Route path="allusers" element={<AllUsers />} />
          <Route path="allproducts" element={<AllProducts />} />
          <Route path="allproducts/editproduct/:ProductId" element={<EditProduct/>} />
          <Route path="addproducts" element={<AddProduct />} />
        </Route>
        <Route path="*" element={<PNF />} />
      </Routes>
      <Toaster />
    </div>
    </>
  )
}

export default App
