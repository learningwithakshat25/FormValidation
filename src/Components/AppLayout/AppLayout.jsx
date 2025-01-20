import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='h-screen w-screen container mx-auto'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayout