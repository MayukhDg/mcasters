"use client";

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from "next/image"
import { fetchUser } from '@/lib/actions/user.actions';
import { redirect, useRouter } from 'next/navigation';


const Home = () => {
const [user, setUser] = useState({});
const { data:session}  = useSession()
const router = useRouter();
 
  
 useEffect(()=>{
  const getUserDetails = async ()=>{
   await fetchUser(session?.user?.id).then(data=>setUser(data));

   
  }
  getUserDetails() 
},[])


  
 if(!session){
    return (
      <div className='p-5 flex' >
        <h3 className='leading-[50px] tracking-[2.5px]'>Give flight to your dreams. <br/>
       <span className='font-medium' > Find a gig in your area</span></h3>
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
  
  if(user?.onboarded){
   router.push("/")
 } else{
   router.push("/onboarding")
 }

 
return (
    <>
    { user?.onboarded && <section className='p-5 flex'>
   <div className='flex flex-col gap-4' >
   <h3 className=' leading-[30px] md:leading-[50px] tracking-[1px]' > Welcome {user?.name}</h3>
   <h4 className='font-medium leading-[45px]'>Give flight to your dreams. <br/>
     <span className='' >Find a gig near you</span> </h4>
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
     </section>}
    </>
  )
}

export default Home