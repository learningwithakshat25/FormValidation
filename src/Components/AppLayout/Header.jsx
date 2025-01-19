import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-red-500 w-full p-3  flex flex-row items-center justify-between md:px-20 sticky top-0'>
      <NavLink to='/'><h1 className='text-white font-bold text-xl md:text-2xl font-Dancing'>The-Community</h1></NavLink>
      <div className="button hidden md:flex gap-4">
      <NavLink to='login' className='bg-white p-2 w-28 text-center text-blue-950 text-base font-semibold rounded-lg'>Login</NavLink >
      {/* //SignUp */}
      <NavLink to='signup' className='bg-white p-2 w-28 text-blue-950 text-base font-semibold rounded-lg text-center'>Signup</NavLink>
      </div>
    </div>
  )
}

export default Header