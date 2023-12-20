import React from 'react'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Home from '../../Component/Home/Home'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
    <>
        <div style={{display:'flex'}}>
        <Sidebar/>
        <Outlet/>
        <Home/>
        </div>
    </>
  )
}

export default Dashboard