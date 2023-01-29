/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useState } from 'react'
import {AiFillLike} from 'react-icons/ai'
import { ToogleCommentModalPro } from '../Types'
import {MdFavorite} from 'react-icons/md'
import {motion} from 'framer-motion'

type Props = {
  setToogleCommentModal:  React.Dispatch<React.SetStateAction<ToogleCommentModalPro>>
}

const BlogCard = ({setToogleCommentModal}: Props) => {


    const word = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia'
    const first2 = word.split(' ').slice(0, 7).join(' ');

    const handleComment = useCallback((id: number) => {
      console.log(id);
      setToogleCommentModal({
        status:'True'
      })
    }, [setToogleCommentModal])
    
  return (
    <motion.div initial={{opacity: 0, y:-100}} whileInView={{opacity:10, y:0}} whileHover={{scale: 1.1}} transition={{duration: 0.4}} className='w-full min-h-[400px] max-h-[800px] bg-transparent shadow-2xl p-3 overflow-auto py-4 cursor-pointer'>
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
              <p className='text-base font-semibold'>2000 Likes</p>
            </div>
           <div className='flex gap-3 mt-4 cursor-pointer'>
           <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 object-cover " src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg" alt="Bordered avatar" />
              <h1 className='mt-2'>Aravind</h1>
           </div>
            </div>
        </div>
        <div className='mt-4 '>
            <div className='bg-gray-700 p-2 px-6 shadow-2xl h-auto rounded-2xl flex justify-between gap-1'>
                <div className=''>
                    <AiFillLike className='text-2xl cursor-pointer text-blue-500' />
                </div>
                <div>
                    <button className='text-white font-semibold' onClick={() => handleComment(1)}>299 Comments</button>
                </div>
                <div>
                    <MdFavorite className='text-2xl cursor-pointer text-orange-500' />
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default BlogCard