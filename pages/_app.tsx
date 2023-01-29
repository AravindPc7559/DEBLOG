import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, createContext } from 'react'
import Loader from './components/IntialLoader/Loader';
import MobileNav from './components/Navbar/MobileNav';
import { UserContext } from './Context/UserContext';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }: AppProps) {

  const [loader, setLoader] = useState(true);
  const [nav, setNav] = useState(false)
 



  setTimeout(() => {
    setLoader(false);
  }, 3000);
  
  return (
    <>
    {
      loader ?
      <div className='w-full h-screen bg-gradient-to-b from-BackgroundColor to-gray-700'>
      <Loader />
      </div>
      :
      <div>
        {
          nav && 
        <MobileNav setNav={setNav} />
        }
         <UserContext.Provider value={{setNav: setNav}}>
         <ToastContainer />
        <Component {...pageProps} />
        </UserContext.Provider>
      </div>
    }
    </>
  )
}

