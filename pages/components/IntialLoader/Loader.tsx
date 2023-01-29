import React from 'react'
import {motion} from 'framer-motion'

const Loader = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <motion.div
      className='w-[150px] h-[150px] border-2 ring-8 flex justify-center items-center rounded-full'
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      duration:1,
      type: "spring",
      stiffness: 260,
      damping: 20,
      repeat:Infinity,
    }}
  >
    <h1 className='text-xl font-semibold text-white'>DE BLOG</h1>
  </motion.div>
    </div>
  )
}

export default Loader