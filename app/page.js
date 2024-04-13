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
        Find a gig in your area</h3>
        <div className='flex flex-1 justify-center pl-5' >  
         <Image
          src="/hero.jpg"
          width={150}
          height={150}
          alt="hero"
          className='md:block hidden w-[120%] rotate-12'
         />
        </div>
      </div>
    )
  }
  

 
return (
    <section className='p-5 flex'>
   <div className='flex flex-col gap-4' >
   <h3 className=' leading-[30px] md:leading-[50px] tracking-[1px]' > Welcome {session?.user?.name}</h3>
   <h4 className=''>Give flight to your dreams. <br/>
        Find a gig in your area</h4>
   </div>
   <div className='flex flex-1 justify-center pl-5' >  
         <Image
          src="/hero.jpg"
          width={150}
          height={150}
          alt="hero"
          className='md:block hidden w-[80%] rotate-12 mt-20'
         />
        </div>
     </section>
  )
}

export default Home