/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {FaBars} from 'react-icons/fa'

type Props = {}

function Navbar({}: Props) {
    const Tabs = [
        {
            name:"Home",
            href:""
        },
        {
            name:"Create Blog",
            href:""
        },
        {
            name:"Profile",
            href:""
        },
        {
            name:"Favorite",
            href:""
        },
        {
            name:"About",
            href:""
        },
    ]
  return (
    <div className='w-full h-auto px-10 bg-BackgroundColor shadow-sm'>
        <div className='flex justify-between items-center text-white font-semibold'>
        <div className='w-[100px]'>
            <img src="/assets/Logo/deblog-logo-removebg-preview.png" className='object-contain' alt="" />
        </div>
        <div className='hidden md:flex'>
            <ul className='flex gap-7'>
                {
                    Tabs.map((obj ,index) => (
                        <li key={index} className='hover:scale-105 transition-all cursor-pointer hover:text-blue-400'>{obj.name}</li>
                    ))
                }
            </ul>
        </div>
        <div className='hidden md:flex'>
            <button className='bg-red-600 px-6 py-1.5 rounded-lg hover:bg-red-700 hover:scale-105 transition-all '>Logout</button>
        </div>
        <div className='md:hidden'>
            <button className='bg-white  rounded-full hover:scale-105 transition-all p-4'><FaBars className='text-black' /></button>
        </div>
        </div>
    </div>
  )
}

export default Navbar