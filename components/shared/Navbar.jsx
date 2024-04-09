"use client"


import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
   
  const { data: session, status } = useSession()
  const router = useRouter();

    return (
    <nav className='flex justify-between items-center p-5'>
     {!session?.user?.email && <Button variant="destructive"  onClick={() => signIn("google")}>Log In</Button>}
     { session?.user?.email && 
     <div className='flex items-center' >
      <Button variant="destructive" onClick={() => signOut()}>Log Out</Button>
      <Button onClick={()=>router.push("/create-audition")} >Create Audition</Button>
     </div>  }
    </nav>
  )
}

export default Navbar