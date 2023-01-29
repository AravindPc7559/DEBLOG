/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { useRouter } from 'next/router';
import { GetProfileUser } from '../Types';

type Props = {
    setToogleEditForm: React.Dispatch<React.SetStateAction<{
        status: boolean;
        id?: number;
    }>>,
    userData: GetProfileUser
}

const ProfileCard = ({setToogleEditForm, userData}: Props) => {
    
    const [isUser, setIsUser] = useState(true);
    const router = useRouter();
  return (
    <motion.div className='w-full h-auto p-5 shadow-2xl overflow-hidden' initial={{opacity:0}} whileInView={{opacity:10, }}>
        <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex py-3 justify-center items-center cursor-pointer'>
           <img className="w-56 h-56 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500 object-cover " src={userData.image.url} alt="Bordered avatar" />
           </div>
            <div className='py-3 flex justify-start items-center'>
                <div>
                <h1 className='text-center md:text-start font-semibold text-white'>{userData.fullname}</h1>
                <p className='text-xs text-center md:text-start py-1 text-white'>{userData.category}</p>
                <p className='text-center md:text-start text-gray-300 leading-7'>{userData.bio}</p>
                <div className='mt-5 flex gap-7 text-white font-semibold'>
                    <button>200 Posts</button>
                    <button>2000 Followers</button>
                    <button>300 Following</button>
                </div>
                <div className='mt-3 flex justify-center md:justify-start'>
                    {
                        isUser ?
                        <>                        
                        <button className='bg-green-500 px-5 py-1 rounded-lg shadow-xl hover:bg-green-600 hover:text-white font-semibold hover:scale-105 transition-all' onClick={() => router.push('/profile/createblog')}>Add Blog</button>
                        <button className='bg-gray-500 px-5 py-1 rounded-lg shadow-xl hover:bg-gray-600 hover:text-white font-semibold hover:scale-105 transition-all ml-2' onClick={() => setToogleEditForm({
                            status: true,
                            id:parseInt(userData.id)
                        })}>Edit Profile</button>
                        </>
                        :
                        <>
                        <button className='bg-blue-500 px-5 py-1 rounded-lg shadow-xl hover:bg-blue-600 hover:text-white font-semibold hover:scale-105 transition-all'>Follow</button>
                        </>
                    }
                </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default ProfileCard