/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {motion} from 'framer-motion'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { ToogleCommentModalPro } from '../Types'

type Props = {
    setToogleCommentModal:  React.Dispatch<React.SetStateAction<ToogleCommentModalPro>>
  }

const CommentModal = ({setToogleCommentModal}: Props) => {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity:10}} transition={{duration: 0.5}} className='z-20 w-[90%] max-h-[600px] fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] overflow-auto h-auto md:p-10 p-7 bg-gray-200  rounded-lg shadow-2xl'>
        <div className='flex justify-end'>
            <AiOutlineCloseCircle className='text-4xl cursor-pointer' onClick={() => setToogleCommentModal({
                status:"False"
            })} />
        </div>
        <div className='flex-col gap-4 border-b-2 py-7 border-black'>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Comments</label>
            <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            <button className='mt-3 px-8 bg-green-500 py-2 rounded-md font-medium'>Submit</button>
        </div>
            <div className='w-full h-auto'>
            <h1 className='mt-6 font-semibold text-2xl text-center'>Recent Comments</h1>
            <div className='flex gap-3 mt-4 cursor-pointer'>
            <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 object-cover " src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg" alt="Bordered avatar" />
         <h1 className='mt-2'>Aravind</h1>
        </div>
        <div className='md:px-10 py-2'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque optio dignissimos, quasi accusantium dolor cupiditate perspiciatis expedita alias culpa, voluptas at ut rem eveniet repudiandae ducimus illo minus amet sint consequatur eius tenetur. Dignissimos, consequatur nesciunt? Veritatis, vel necessitatibus omnis aliquam repudiandae eligendi sapiente nobis dolorum earum mollitia consequuntur dicta non maiores similique eum officia commodi. Iure officiis consectetur cupiditate esse laboriosam magni quam soluta, ipsum quos nobis optio asperiores aliquam cumque fugiat et repudiandae, expedita atque! Odit deleniti quod quos, neque corrupti delectus explicabo iure ea magnam reiciendis similique fugit voluptas, quasi culpa ut temporibus labore esse facere mollitia. Architecto eius ex saepe, doloremque veritatis voluptates quibusdam porro iusto. Optio est dolores quis non vero hic ipsa placeat sit quod, libero vel mollitia blanditiis eos, ratione facere et voluptatem dolor iusto adipisci doloremque ipsum odio fugit eum. Quidem, illo sed sapiente ratione commodi quibusdam quos reiciendis natus inventore assumenda magni ipsam quis ab repellat velit quo consectetur, aperiam fuga. Sequi quibusdam reiciendis ducimus totam cum cumque, veniam sed quisquam aliquam exercitationem, nisi qui accusamus dolorem molestiae eum quis eveniet magni nam in fugiat, provident odit ad! Aliquam aperiam, impedit praesentium, debitis blanditiis porro, molestiae atque ipsa labore voluptatum cumque.</p>
        </div>
            </div>
    </motion.div>
  )
}

export default CommentModal