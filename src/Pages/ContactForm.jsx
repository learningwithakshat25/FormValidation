import React, { useState } from 'react'
import LogIn from './LogIn';
import Left from './Left';

const Form = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <div className='h-screen w-screen bg-white flex md:flex-row flex-col'>
      <LogIn />
    </div>
  )
}

export default Form