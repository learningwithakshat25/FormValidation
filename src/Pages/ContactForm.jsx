import React, { useState } from 'react'
import LogIn from './LogIn';
import Left from './Left';

const Form = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <div className='w-screen bg-white flex md:flex-row flex-col container mx-auto'>
      <LogIn />
    </div>
  )
}

export default Form