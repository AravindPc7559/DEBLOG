/* eslint-disable @next/next/no-img-element */
import { UserContext } from '@/pages/Context/UserContext';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import {FaBars} from 'react-icons/fa'
import { toast } from 'react-toastify';

type Props = {}

function Navbar({}: Props) {
    const router = useRouter();
    const {setNav, user} = useContext(UserContext);
    const userID = localStorage.getItem('UserId');
    
    

    const Tabs = [
        {
            name:"Home",
            href:"/homepage"
        },
        {
            name:"Create Blog",
            href:"/profile/createblog"
        },
        {
            name:"Profile",
            href:`/profile/${userID}`
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
                        <li key={index} onClick={() => router.push(obj.href)} className='hover:scale-105 transition-all cursor-pointer hover:text-blue-400'>{obj.name}</li>
                    ))
                }
            </ul>
        </div>
        <div className='hidden md:flex'>
            <button className='bg-red-600 px-6 py-1.5 rounded-lg hover:bg-red-700 hover:scale-105 transition-all ' onClick={() => {
                Cookies.remove('UserInfo')
                localStorage.removeItem('UserId')
                router.push('/')
                toast.success("You have logged out successfully.....", {
                    position: "top-right",
                    });
            }}>Logout</button>
        </div>
        <div className='md:hidden'>
            <button className='bg-white  rounded-full hover:scale-105 transition-all p-4'><FaBars className='text-black' onClick={() => setNav(true)} /></button>
        </div>
        </div>
    </div>
  )
}

export default Navbar