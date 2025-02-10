import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axiosInstance from "../../../../lib/axios";
import { Link } from "react-router-dom";

const AllUser = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try { 
      const response = await axiosInstance.get(`/userroutes/allUsers`);
      if (response.status === 200) {
        const AllUsers = response.data.allUsers;
        setUsers(AllUsers);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products! Please try again.");
    }
  };


  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div className="overflow-x-auto">
      <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
    {users.map((user) => (
      <tr key={user._id}>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.Name}</div>
              <div className="text-sm opacity-50">Jaipur</div>
            </div>
          </div>
        </td>
        
        <td>
        <div className="font-bold">{user.Email}</div>
        </td>
        <td>
        <div className="font-bold">{user.PhNo}</div>
        </td>
        <th>
          <Link to={`editproduct/${user._id}`} className="text-blue-500 btn btn-ghost btn-xs">Edit</Link>
        </th>
      </tr>
    ))}
    </tbody>
  </table>
</div>
    </>
  );
};

export default AllUser;
