


import React from 'react';
import { useSession } from 'next-auth/react';
import AuditionForm from '@/components/shared/AuditionForm';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

const page = async() => {
  
  const  { user }  = await getServerSession(authOptions) 
 
  return (
    <div>
      <AuditionForm id={user?.id} />
    </div>
  )
}

export default page