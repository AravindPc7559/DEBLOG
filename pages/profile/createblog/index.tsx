import CreateBlogComponent from '@/pages/components/CreateBlog/CreateBlogComponent'
import Navbar from '@/pages/components/Navbar/Navbar'
import React from 'react'

type Props = {}

const CreateBlog = (props: Props) => {
  return (
    <div className='bg-gradient-to-b from-BackgroundColor to-gray-700 min-h-screen w-full px-2'>
    <Navbar />
    <div className='container mx-auto p-3 mt-5'>
      <CreateBlogComponent />
    </div>
    </div>
  )
}

export default CreateBlog