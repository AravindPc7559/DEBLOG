/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useState } from 'react'
import {AiFillDelete, AiFillEdit, AiFillLike} from 'react-icons/ai'
import {MdFavorite} from 'react-icons/md'
import {motion} from 'framer-motion'

type Props = {}

const ProfileBlogCard = (props: Props) => {
  return (
    <motion.div initial={{opacity: 0, x:-50}} whileInView={{opacity:10, x:0}} whileHover={{scale: 1.1}} transition={{duration: 0.4}} className='w-full min-h-[400px] max-h-[800px] bg-transparent shadow-2xl p-3 overflow-auto py-4 cursor-pointer'>
    <div className='w-full max-h-[200px] rounded-lg'>
        <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" className='object-cover h-full w-full rounded-lg' alt="" />
    </div>
    <div className='px-3 text-white mt-8'>
    <h1 className="text-xl font-bold mt-5 text-start mb-2">
          This is a wider card with supporting ....
        </h1>
        <p className='text-start text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita nemo quaerat optio ab quam eveniet iste libero repellendus at.</p>
        <div className='flex justify-between'>
        <div className='mt-4 rounded-full p-2 flex justify-center items-center'>
        </div>
        </div>
    </div>
    <div className=' '>
        <div className='bg-gray-700 p-2 px-6 shadow-2xl h-auto rounded-2xl flex justify-between gap-1'>
            <div className=''>
                <AiFillDelete className='text-2xl cursor-pointer text-red-500' />
            </div>
            <div>
                <button className='text-white font-semibold'>299 Comments</button>
            </div>
            <div>
                <AiFillEdit className='text-2xl cursor-pointer text-blue-500' />
            </div>
        </div>
    </div>
</motion.div>
  )
}

export default ProfileBlogCard