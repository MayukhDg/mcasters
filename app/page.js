"use client";

import React from 'react';
import { useSession } from 'next-auth/react';
import Image from "next/image"



const Home = () => {
  const { data:session}  = useSession();


  if(!session){
    return (
      <div className='p-5 flex' >
        <h3 className='leading-[50px] tracking-[2.5px]'>Give flight to your dreams. <br/>
        Find an Acting gig in your area</h3>
        <div className='flex flex-1 justify-center pl-5' >  
         <Image
          src="/hero.jpg"
          width={150}
          height={150}
          alt="hero"
          className='w-[120%] rotate-12'
         />
        </div>
      </div>
    )
  }
  

 
return (
    <section className='p-5 flex'>
   <h3 className='leading-[50px] tracking-[1px]' > Welcome {session?.user?.name}</h3>
   <div className='flex flex-1 justify-center pl-5' >  
         <Image
          src="/hero.jpg"
          width={150}
          height={150}
          alt="hero"
          className='w-[80%] rotate-12 mt-20'
         />
        </div>
     </section>
  )
}

export default Home