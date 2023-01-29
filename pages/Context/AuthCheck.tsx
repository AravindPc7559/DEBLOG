import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react'
import { useJwt } from "react-jwt";



type Props = {}

const AuthCheck = ({childrens}: any) => {
    const router = useRouter();
    
    const data = localStorage.getItem('UserInfo')
    const token = JSON.stringify(data);
    const { decodedToken, isExpired } = useJwt(token);
    const [isLogged, setIsLogged] = useState(false);

console.log(data);
console.log(isExpired);



    const AuthChecking = useCallback(() => {
      if(data ====)
    }, [])
    
    console.log(isLogged)
    useEffect(() => {
        AuthChecking();
        if(!isLogged){
            router.push('/')
        }
    }, [isLogged, router])

  return (
    <div>{childrens}</div>
  )
}

export default AuthCheck