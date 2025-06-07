import React from 'react'

const ChangePassForm = ({setStep}) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">



<div className="w-full grid lg:grid-cols-1">
        <div className="flex flex-col  items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8 ">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <h1 className="text-2xl font-bold mt-2">Change Pass</h1>
            </div>
          </div>
          <form  className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Old Password</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='text' name="FullName"   className="input input-bordered input-dark w-full pl-10" required/>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">New Password</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='text' name="FullName"   className="input input-bordered input-dark w-full pl-10" required/>
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full" >Add</button>
            </div>
          </form>
          <button  onClick={()=>setStep("ProfilePage")} className="btn btn-sm w-full">Cancel</button>       
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassForm  



