import { fetchAllAuditions } from '@/lib/actions/audition.actions'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

const page = async() => {
  
  const {user} = await getServerSession(authOptions);
  const auditions = await fetchAllAuditions();
  
  return (
    <div>page</div>
  )
}

export default page