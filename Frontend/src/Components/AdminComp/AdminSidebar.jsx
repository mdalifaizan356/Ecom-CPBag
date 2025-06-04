import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
  <>
    <div>
      <ul className="menu bg-base-200 rounded-box w-56 p-2 mb-2 h-" >
        <li>
          <details open>
            <summary>Manage website</summary>
            <ul>
              <li><Link to="#">Update Banner</Link></li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary disabled>Manage Users</summary>
            <ul>
              <li><Link to="allusers">All Users</Link></li>
              {/* <li><Link to="#">Block/Unblock Users</Link></li> */}
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>Manage Products</summary>
            <ul>
            <li><Link to="allproducts">All Product</Link></li>
              <li><Link to="addproducts">Add Product</Link></li>
              <li><Link to="#">Product Categories</Link></li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>Manage Coupons & Discounts</summary>
            {/* <ul>
            <li><Link to="#">All Coupons</Link></li>
              <li><Link to="#">Create New Coupon</Link></li>
              <li><Link to="#">Add Discounts</Link></li>
            </ul> */}
          </details>
        </li>
        <li>
          <details open>
            <summary>Manage Orders</summary>
            <ul>
              <li><Link to="#">All Orders</Link></li>
              <li><Link to="#">Pending Orders</Link></li>
              <li><Link to="#">Completed Orders</Link></li>
              <li><Link to="#">Canceled Orders</Link></li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>Manage Stock</summary>
            <ul>
              <li><Link to="#">All Stock</Link></li>
              {/* <li><Link to="#">Update Stock</Link></li>
              <li><Link to="#">Low Stock Alerts</Link></li>
              <li><Link to="#">Out of Stock Products</Link></li> */}
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>Reports & Analytics</summary>
            <ul>
              <li>
            <details open>
              <summary>Sales Report</summary>
              <ul>
                <li><Link to="#">Total Sales Overview</Link></li>
                <li><Link to="#">Date Range Filter</Link></li>
                <li><Link to="#">Category-Wise Sales</Link></li>
                <li><Link to="#"> Payment Method Analysis</Link></li>
              </ul>
            </details>
          </li>              
          {/* <li>
            <details open>
              <summary>User Activity</summary>
              <ul>
                <li><Link to="#">Total Active Users</Link></li>
                <li><Link to="#">User Login History</Link></li>
                <li><Link to="#">Total Active Users</Link></li>
                <li><Link to="#">Cart & Checkout Behavior</Link></li>
                <li><Link to="#">User Location & Device Data</Link></li>
              </ul>
            </details>
          </li> */}
          <li>
            <details open>
              <summary>Best Selling Products</summary>
              <ul>
                <li><Link to="#">Top Selling Products</Link></li>
                <li><Link to="#">Customer Reviews & Ratings</Link></li>
                <li><Link to="#">Category-Wise Sales</Link></li>  
                <li><Link to="#"> Payment Method Analysis</Link></li>
              </ul>
            </details>
          </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </>
  )
}

export default AdminSidebar


