import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Auth from './components/Authentification/Auth'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full h-screen flex justify-center items-center p-7 bg-LoginBg bg-cover'>
     <Auth />
    </div>
  )
}
