import React from 'react'
import Img from '../../src/assets/SE.png'

const Left = () => {
  return (
    <div className="left hidden p-10 md:h-full w-full md:w-2/4 md:flex items-center justify-center">
    {/* <h1 className='text-3xl md:text-6xl font-bold font-Poppins text-center'>Welcome to <p className='font-Dancing text-2xl md:text-5xl mt-2'>The Community</p></h1> */}
    <img className='h-full' src={Img} alt="" />
    </div>
  )
}

export default Left