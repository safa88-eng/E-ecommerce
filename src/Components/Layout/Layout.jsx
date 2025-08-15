import React from 'react'
import Navbar from '../Navbar/Navbar'
import Register from '../Register/Register'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
 <>
 <Navbar/>
 {/* <Register/> */}
 {/* <Login/> */}
 <Outlet/>
 <Footer/>

 </>
  )
}
