import React from 'react'
import Left from './Left'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='h-screen w-screen bg-white flex md:flex-row flex-col'>
            <Left />
            <div className='right h-full w-full md:w-2/4 md:flex items-center justify-center md:p-4 '>
            <form className='p-4 flex flex-col gap-3 w-full'>
            <h1 className='text-blue-950 font-bold font-Poppins text-4xl'>Signup</h1>
            <hr className='bg-blue-950 h-1'/>
            <div className="username flex flex-col items-start justify-center gap-3">
            <label className='text-black font-semibold text-base'>Username</label>
            <input className='w-full p-2 rounded-md border border-blue-900' type="text" />
            </div>
            <div className="email flex flex-col items-start justify-center gap-3">
              <label className='text-black font-semibold text-base'>Email</label>
              <input className='w-full p-2 rounded-md border border-blue-900' type="email"/>
            </div>
            <div className="password flex flex-col items-start justify-center gap-3">
              <label className='text-black font-semibold text-base'>Password</label>
              <input className='w-full p-2 rounded-md border border-blue-900' type="password"/>
            </div>
            <div className="cnfm-password flex flex-col items-start justify-center gap-3">
              <label className='text-black font-semibold text-base'>Confirm Password</label>
              <input className='w-full p-2 rounded-md border border-blue-900' type="password"/>
            </div>
            <input className='text-white bg-blue-600 rounded-md p-3' type="submit" />
            <p className='text-center'>Have an account? <NavLink to='login' className='text-blue-600'>Login</NavLink></p>
          </form>
            </div>
        </div>
    )
}

export default SignUp