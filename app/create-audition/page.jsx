"use client"

import React from 'react';
import AuditionForm from '@/components/shared/AuditionForm';
import { getSession } from 'next-auth/react';

const page = async() => {
  const session = getSession(); 
 
 
  return (
    <div>
      <AuditionForm id={session?.user?.id} />
    </div>
  )
}

export default page