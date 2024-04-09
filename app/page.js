"use client";

import React from 'react';
import { useSession } from 'next-auth/react';

import Auditions from '@/components/shared/Auditions';



const Home = () => {
  const { data:session}  = useSession();


  if(!session){
    return (
      <div>
        <h3>No User Found. Log In</h3>
      </div>
    )
  }
  

 
return (
    <section className='px-5'>
    Welcome {session?.user?.name}
     </section>
  )
}

export default Home