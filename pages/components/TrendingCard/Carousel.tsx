/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Props = {}

const Carousel = (props: Props) => {
  return (
    <div className=''>
      <div className="flex justify-center shadow-xl cursor-pointer">
        <div className="flex flex-col md:flex-row rounded-lg">
          <div className=' flex justify-center items-center '>
          <img className="md:h-auto w-full min-h-auto object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
          </div>
         <div className='flex justify-center items-center md:px-10'>
         <div className="p-6 flex flex-col justify-start text-white">
          <p>Travel -july 2 2022</p>
            <h1 className="text-2xl font-bold mt-2 mb-4">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus vel culpa est mollitia nemo, impedit, odio harum illo quia repudiandae accusantium incidunt iste ?</p>
            <div className='flex gap-3 mt-7'>

            <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 object-cover " src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg" alt="Bordered avatar" />
              <h1 className='mt-2'>Aravind</h1>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel