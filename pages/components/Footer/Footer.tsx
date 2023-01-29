import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full h-auto py-5 px-6 mt-5 bg-gradient-to-b from-gray-700 to-gray-900 border-none shadow-2xl'>
        <motion.div initial={{opacity:0}} whileInView={{opacity:10}} className='text-center text-gray-300 font-medium'>
            <h1>@2021 Aravind Pc. All Rights Reserved</h1>
        </motion.div>
    </div>
  )
}   

export default Footer