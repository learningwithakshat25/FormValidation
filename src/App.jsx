import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Components/AppLayout/AppLayout'
import ContactForm from './Pages/ContactForm'
import Hero from './Pages/Hero'
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      children: [
        {
          path: '/',
          element: <ContactForm/>
        },
        {
          path: '/hero',
          element: <Hero/>
        },
        {
          path: '/signup',
          element: <SignUp/>
        },
        {
          path: '/login',
          element: <LogIn/>
        },
        {
          path: '/signup/login',
          element: <LogIn/>
        },
        {
          path: 'login/signup',
          element: <SignUp/>
        }
      ]
    }
  ])
  return (
    <div className='h-screen w-screen'>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App