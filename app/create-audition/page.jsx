"use client"

import React from 'react';
import AuditionForm from '@/components/shared/AuditionForm';
import {  useSession } from 'next-auth/react';

const page = () => {
  const { data: session} = useSession()
 
 
  return (
    <div>
      <AuditionForm id={session?.user?.id} />
    </div>
  )
}

export default page