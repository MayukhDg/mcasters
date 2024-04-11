"use client"


import React from 'react';
import { useSession } from 'next-auth/react';
import AuditionForm from '@/components/shared/AuditionForm';


const page = () => {
  
  const  { data:session }  = useSession(); 
 
  return (
    <div>
      <AuditionForm id={session?.user?.id} />
    </div>
  )
}

export default page