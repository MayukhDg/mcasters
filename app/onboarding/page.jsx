"use client"


import { fetchUser, updateUser } from '@/lib/actions/user.actions';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const page = () => {
  
  const [user, setUser] = useState({});
  const { data: session } = useSession();
  const router = useRouter();


  

  useEffect(()=>{
    const getUserDetails = async ()=>{
      await fetchUser(session?.user?.id).then(data=>setUser(data));
    }
     getUserDetails() 
},[])

if(user?.onboarded){
  router.push("/")
}



  const handleClick = async(e)=>{
    e.preventDefault();
    
    try {
       
     const updatedUser = await updateUser({
        userName: session?.user?.name , 
        email: session?.user?.email, 
        image: session?.user?.image, 
        onboarded: true
      })
      
      if(updatedUser){
        router.push("/")
      }
  
    } catch (error) {
      console.log(error)
    }


  }

  
  return (
    <div>
     <button onClick={handleClick} >Complete Onboarding</button>
    </div>
  )
}

export default page