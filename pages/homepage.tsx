import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/TrendingCard/Carousel'
import {motion} from 'framer-motion'
import BlogCard from './components/Card/BlogCard'
import CommentModal from './components/Common/CommentModal'
import { ToogleCommentModalPro } from './components/Types'

type Props = {}



const Homepage = (props: Props) => {
  const [toogleCommentModal, setToogleCommentModal] = useState<ToogleCommentModalPro>({
    status: 'False',
    id:-1,
  });

  return (
    <>
    <div className='bg-gradient-to-b from-BackgroundColor to-gray-700 min-h-screen w-full px-2'>
      <Navbar />
      <motion.div className='container mx-auto mt-7 px-4 md:px-10 h-auto' initial={{opacity: 0}} whileInView={{opacity: 10, y: -10}} exit={{opacity: 0}} transition={{duration : 2}}>
        <h1 className='text-center my-8 font-semibold text-3xl text-gray-300'>TRENDING BLOG</h1>
        <Carousel />
      </motion.div>
      {
        toogleCommentModal.status === 'True' &&
          <CommentModal setToogleCommentModal={setToogleCommentModal} />
      }
      <h1 className='text-center my-8 font-semibold text-3xl text-gray-300 mt-24'>BLOGS</h1>
      
      <div className='container mx-auto px-4 py-5 mt-7 md:px-10 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        <BlogCard setToogleCommentModal={setToogleCommentModal} />
        <BlogCard setToogleCommentModal={setToogleCommentModal} />
        <BlogCard setToogleCommentModal={setToogleCommentModal} />
        <BlogCard setToogleCommentModal={setToogleCommentModal} />
        <BlogCard setToogleCommentModal={setToogleCommentModal} />
        <BlogCard setToogleCommentModal={setToogleCommentModal} />
        <BlogCard setToogleCommentModal={setToogleCommentModal} />
        <BlogCard setToogleCommentModal={setToogleCommentModal} />
        <BlogCard setToogleCommentModal={setToogleCommentModal} />
        <BlogCard setToogleCommentModal={setToogleCommentModal} />

      </div>
    </div>
    </>
  )
}

export default Homepage