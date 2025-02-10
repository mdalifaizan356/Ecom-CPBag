import React from 'react'
import Userstat from '../../../Components/AdminComp/AdminIndexCopm/Userstat'

const AdminIndex = () => {
  return (
    <>
    <div className="flex w-full flex-col border-opacity-50">
    <Userstat/>
  <div className="divider"></div>
  <Userstat/>
</div>
    </>
  )
}

export default AdminIndex

