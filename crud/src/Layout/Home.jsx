import React from 'react'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'

function Home() {
  return (
   <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
   </>
  )
}

export default Home