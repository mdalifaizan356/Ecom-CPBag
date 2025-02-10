import React from 'react'
import { Link } from 'react-router-dom'

const UserSidebar = () => {
  return (
  <>
    <div>
      <ul className="menu bg-base-200 rounded-box w-56 p-2 mb-2" style={{height:"98vh"}}>
        <li>
          <details open>
            <summary>Manage Profile</summary>
            <ul>
              <li><Link to="#">Update Profile</Link></li>
              <li><Link to="#">Change Password</Link></li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>Manage Orders</summary>
            <ul>
              <li><Link to="#">All Orders</Link></li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>Manage Address</summary>
            <ul>
              <li><Link to="#">All Address</Link></li>
              <li><Link to="#">Add Address</Link></li>
            </ul>
          </details>
        </li>
        <Link to="/"><button >Logout</button></Link>
      </ul>
    </div>
  </>
  )
}

export default UserSidebar


