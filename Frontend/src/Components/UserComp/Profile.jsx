import React from 'react'
import useAuth from '../../CustomHooks/useAuth';

const Profile = ({setStep}) => {
  const { userData } = useAuth();
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={userData.ProfilePic}  
              alt="User"
              className="w-20 h-20 rounded-full border-4 border-blue-500"
            />
            <div>
              <h2 className="text-2xl font-bold">{userData.Name}</h2>
              <p className="text-gray-600">{userData.Email}</p>
               <button  onClick={()=>setStep("EditProComp")} className="btn btn-sm mt-2 mr-2">Edit Profile</button>
               <button  onClick={()=>setStep("ChangePassComp")} className="btn btn-sm mt-2">Change Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile