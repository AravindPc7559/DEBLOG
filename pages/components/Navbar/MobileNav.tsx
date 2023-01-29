import React from 'react'
import {motion} from 'framer-motion'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useRouter } from 'next/router'

type Props = {
    setNav: any
}

const MobileNav = ({setNav}: Props) => {
    const router = useRouter();
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
            href:"/profile"
        },
        {
            name:"About",
            href:""
        },
    ]
  return (
    <motion.div className='w-full p-10 h-auto absolute bg-BackgroundColor  shadow-xl z-50' initial={{y: -90}} whileInView={{y: 0}}>
        <div className='flex justify-end'>
            <AiOutlineCloseCircle className='text-4xl cursor-pointer text-white' onClick={() => setNav(false)} />
        </div>
        <ul className='text-lg font-semibold text-white'>
            {
                Tabs.map((obj) => (
                    <>                    
                    <li className='mt-4' onClick={() => {
                        router.push(obj.href)
                        setNav(false)
                    }}>{obj.name}</li>
                    </>
                ))
            }
        </ul>
    </motion.div>
  )
}

export default MobileNav