import React, { useState } from 'react'
import ProfileBlogCard from './BlogCard/ProfileBlogCard';

type Props = {}

const ProfilePost = (props: Props) => {
    const [tabs, setTabs] = useState(true);
  return (
    <div className='mt-8'>
        <div className='w-full h-auto flex text-center'>
            <div onClick={() => setTabs(true)} className={`w-[50%]  py-2 cursor-pointer font-semibold text-white  ${tabs && 'border-b-2'} ${tabs && 'text-blue-600'} ${tabs && 'border-blue-600'} text-base`}>Blogs</div>
            <div onClick={() => setTabs(false)} className={`w-[50%]  py-2 cursor-pointer font-semibold ${!tabs && 'border-b-2'} ${!tabs && 'text-blue-600'} ${!tabs && 'border-blue-600'} text-white text-base`}>Saved</div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 px-2 gap-8'>
        {
          tabs ?
          <>
          <ProfileBlogCard />
          <ProfileBlogCard />
          <ProfileBlogCard />
          <ProfileBlogCard />
          <ProfileBlogCard />
          <ProfileBlogCard />
          </>
          :
          null
        }

        </div>
    </div>
  )
}

export default ProfilePost