import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./pages/utils/auth";

export async function middleware(req: NextRequest){
     const token  = req.cookies.get('UserInfo')?.value

     const verifiedToken = token && (await verifyAuth(token).catch((err) => {
        console.log(err)
     }))

     if(!verifiedToken && req.nextUrl.pathname.startsWith('/homepage')){
        return NextResponse.redirect(new URL('/', req.url))
     }
     if(!verifiedToken && req.nextUrl.pathname.startsWith('/profile')){
        return NextResponse.redirect(new URL('/', req.url))
     }

     if(verifiedToken && req.nextUrl.pathname === '/'){
        return NextResponse.redirect(new URL('/homepage', req.url))
     }
     

}   