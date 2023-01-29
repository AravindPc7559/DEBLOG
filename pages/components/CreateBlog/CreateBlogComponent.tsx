import React, { useCallback, useState, useRef } from 'react'
import { useForm } from "react-hook-form";

type Props = {}

const CreateBlogComponent = (props: Props) => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    
  };

  return (
    <div className='w-full h-auto'>
        <h1 className='text-center py-7 font-semibold text-2xl text-gray-300'>Create Blog</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" className='w-full p-3 focus:outline-none bg-transparent shadow-lg border-b-2 text-white' placeholder='Enter blog name.....'  {...register("blogName", { required: "Blog name is required!", minLength:{value:2, message:"Minimum blog name contain 2 characters!"}, maxLength:{value:100, message:"Maximum blog name contain 100 characters!"} })}  />
        {errors.blogName && <span className='text-red-600'>{errors.blogName?.message}</span>}
        <textarea rows={17}  className="mt-3 block p-2.5 w-full text-sm text-white bg-transparent  focus:outline-none border-b-2 "  placeholder="Write your blog here....." {...register("blog", { required: "Blog is required!", minLength:{value:2, message:"Minimum blog contain 2 characters!"}})}/>
        {errors.blogName && <span className='text-red-600'>{errors.blog?.message}</span>}
        <input type="file" className='mt-10 text-white' />
        <div className='flex justify-center mt-5'>
        <button type='submit' className='px-6 py-2 bg-green-500 hover:bg-green-600 hover:scale-105 transition-all hover:text-white font-semibold rounded-md'>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default CreateBlogComponent