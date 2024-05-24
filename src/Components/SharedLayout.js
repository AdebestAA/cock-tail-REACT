import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Pages.js/Navbar'

const SharedLayout = () => {
  return (
<>
<Navbar />
<Outlet/>
</>
  )
}

export default SharedLayout
