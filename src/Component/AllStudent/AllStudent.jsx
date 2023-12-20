import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

const AllStudent = () => {
  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
        AllStudent
        <Outlet/>
    </div>
  )
}

export default AllStudent