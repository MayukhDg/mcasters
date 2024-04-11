"use client"


import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from "next/link"
import MobileMenu from './MobileMenu';

const Nav2 = () => {
   
  const { data: session, status } = useSession()
  const router = useRouter();

    return (
    <nav className='p-5'>
     { status!=="authenticated" && <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' variant="destructive"  onClick={() => signIn("google")}>Log In</button> } 
      { status ==="authenticated" && 
      <div className='flex items-center w-full justify-between'>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={()=>router.push("/")} >Home</button> 
      <div className=' hidden md:flex items-center' >
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' variant="destructive" onClick={() => {
        signOut()
        router.push("/")
      }}>Log Out</button>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={()=>router.push("/create-audition")} >Create Audition</button>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={()=>router.push("/latest-auditions")} >Latest Auditions</button>
      <Link href={`/profile?id=${session?.user?.id}`} >
      <Image
       src={session?.user?.image}
       height={40}
       width={40}
       className='rounded-full'
       alt="profile"
      />
      </Link>
      </div>
      <MobileMenu/>
      </div> } 

    </nav>
  )
}

export default Nav2