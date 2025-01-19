import React from 'react'
import Left from './Left'
import { NavLink } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { ToastContainer , toast } from 'react-toastify'

const SignUp = () => {
  const {
      register,
      handleSubmit,
      reset,
      watch,
      formState: { errors , isSubmitting},
    } = useForm()

    const onSubmitted = async (data)=>{
        await new Promise((e) => setTimeout(e,5000));
        reset();
        console.log('Submitted',data);
        localStorage.setItem('userdata-Signup',JSON.stringify(data));
        toast.success('Submitted Successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
    return (
        <div className='h-screen w-screen bg-white flex md:flex-row flex-col'>
            <Left />
            <div className='right h-full w-full md:w-2/4 md:flex items-center justify-center md:p-4 '>
            <form onSubmit={handleSubmit(onSubmitted)} className='p-4 flex flex-col gap-3 w-full'>
            <h1 className='text-blue-950 font-bold font-Poppins text-4xl'>Signup</h1>
            <hr className='bg-blue-950 h-1'/>
            {isSubmitting && <p className='text-blue-950 font-bold text-2xl text-center'>Loading...</p>}
            <div className="username flex flex-col items-start justify-center gap-3">
            <label className='text-black font-semibold text-base'>Username</label>
            <input {...register('username',
              {
                required: {value:true, message:'Field is Required'},
                minlength: {value:2, message: 'Min Length atleast 2'},
                maxlength: {value:15, message: 'Maz Length atleast 15'}
              }
            )} className='w-full p-2 rounded-md border border-blue-900' type="text" />
            {errors.username && <p className='text-red-600 font-semibold text-base'>{errors.username.message}</p>}
            </div>
            <div className="email flex flex-col items-start justify-center gap-3">
              <label className='text-black font-semibold text-base'>Email</label>
              <input {...register('email',
                {
                  required: {value:true, message: 'Field is Required'},
                }
              )} className='w-full p-2 rounded-md border border-blue-900' type="email"/>
              {errors.email && <p className='text-red-600 font-semibold text-base'>{errors.email.message}</p>}
            </div>
            <div className="password flex flex-col items-start justify-center gap-3">
              <label className='text-black font-semibold text-base'>Mobile Number</label>
              <input {...register('mobilenumber',
                {
                  required: {value:true, message:'Field is Required'},
                  minlength:{value:10 , message:'Min Length atleast 10'}
                }
              )} className='w-full p-2 rounded-md border border-blue-900' type="number"/>
              {errors.mobilenumber && <p className='text-red-600 font-semibold text-base'>{errors.mobilenumber.message}</p>}
            </div>
            <div className="cnfm-password flex flex-col items-start justify-center gap-3">
              <label className='text-black font-semibold text-base'>Password</label>
              <input {...register('password',
                {
                  required: {value:true, message:'Field is Required'},
                  pattern:{
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{4,8}$/
                    , message:'Password not Match'
                  },
                  minLength:{value:4, message:'Min Length atleast 4'},
                  maxLength:{value:8, message:'Max Length atleast 8'},
                }
              )} className='w-full p-2 rounded-md border border-blue-900' type="password"/>
              {errors.password && <p className='text-red-600 font-semibold text-base'>{errors.password.message}</p>}
              <p className='text-center text-sm'>Password must be uppercase, lowecase, digits, special-Character! </p>
            </div>
            <input disabled={isSubmitting} value={isSubmitting ? 'Submitting' : 'Submit'}className='text-white bg-blue-600 rounded-md p-3' type="submit" />
            <p className='text-center'>Have an account? <NavLink to='login' className='text-blue-600'>Login</NavLink></p>
             <ToastContainer/>
          </form>
            </div>
        </div>
    )
}

export default SignUp