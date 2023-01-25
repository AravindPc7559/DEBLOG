import { motion } from 'framer-motion'
import React, { useState } from 'react'
import {BsPersonCircle} from 'react-icons/bs'
import { useForm } from "react-hook-form";
import Spinner from '../Common/Spinner';

type Props = {}

const Auth = (props: Props) => {
  const [toogleRegister, setToogleRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  // Validation
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const onSubmit = (data:any) => {
    console.log(data);
    if(data.Password !== data.ConfirmPassword ){
      setError('ConfirmPassword', { type: 'custom', message: 'Password not matching....' });
    }
    
  };

  // Validation
  return (
   <motion.div   initial={{ scale: 0 }} animate={{scale: 1}} transition={{duration : 0.5}}
   className='max-w-[400px]  max-h-auto p-10 bg-transparent shadow-2xl rounded-3xl flex justify-center items-center '>
    <div className=''>
      <div className='flex justify-center'>
      <BsPersonCircle className='text-5xl text-white' />
      </div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex-col'>
      {
        toogleRegister &&
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration:0.5}} exit={{opacity: 0}}>
      <input  type="text" className='w-full mt-5 p-2 border-gray-600  text-white focus:outline-none  bg-transparent border-b-2'  placeholder='Enter full name......' {...register("Fullname", { required: "Fullname is required", maxLength: {value:20 , message:"Maximum limit is 20 characters"}, minLength:{value:2, message:"Minimum character required is 2"} })} />
      {errors.Fullname && <span className='text-red-600'>{errors.Fullname?.message}</span>}
      <input type="text" inputMode='numeric' className='w-full mt-5 p-2 border-gray-600  text-white focus:outline-none  bg-transparent border-b-2 ' placeholder='Enter mobile number.....' {...register("Number", { required: "Number is required", maxLength: {value:10 , message:"Maximum digit required is 10"}, minLength:{value:10, message:"Minimum digit required is 10"}, pattern:{value:/^\d{10}$/ , message:"Enter a valide mobile number.."}  })} />
      {errors.Number && <span className='text-red-600'>{errors.Number?.message}</span>}
        </motion.div>
      }
      <input type="text" className='w-full mt-5 p-2 border-gray-600  text-white focus:outline-none  bg-transparent border-b-2' placeholder='Enter email address.....' {...register("Email", { required: "Email is required", pattern:{value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , message:"Enter a valid email address.."}  })} />
      {errors.Email && <span className='text-red-600'>{errors.Email?.message}</span>}
      <input type="password" className='w-full mt-5 p-2 border-gray-600  text-white focus:outline-none  bg-transparent border-b-2' placeholder='Enter password.....' {...register("Password", { required: "Password is required", minLength:{value:6, message:"Minimum six characters required....."}, maxLength:{value:15, message:"Please add below 15 characters"}  })} />
      {errors.Password && <span className='text-red-600'>{errors.Password?.message}</span>}
      {
        toogleRegister &&
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration:0.5}} exit={{opacity: 0}}>
        <input type="password" className='w-full mt-5 p-2 border-gray-600  text-white focus:outline-none  bg-transparent border-b-2' placeholder='Confirm password.....' {...register("ConfirmPassword",{required:"Confirm password is require"})} />
        {errors.ConfirmPassword && <span className='text-red-600'>{errors.ConfirmPassword?.message}</span>}
</motion.div>
      }
      </div>
      <div className='flex justify-center mt-3'>
        {
          loading ?
          <button  className='mt-3 py-2 px-8 rounded-xl  bg-blue-300 select-none hover:scale-105 transition-all hover:bg-blue-400 font-medium' disabled={true}><Spinner /></button>
          :
          <button type='submit' className='mt-3 py-2 px-6 rounded-xl  bg-blue-300 select-none hover:scale-105 transition-all hover:bg-blue-400 font-medium'>{!toogleRegister ? 'Login' : 'Sign Up'}</button>
        }
      </div>
      <div className='flex justify-center mt-3'>
      <button type='button' className='select-none text-white' onClick={() => setToogleRegister(!toogleRegister)}>{!toogleRegister ? 'Create a new account?' : 'Already have an account!'}</button>
      </div>
      </form>
    </div>

   </motion.div>
  )
}

export default Auth