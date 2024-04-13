

import React from 'react';
import AuditionForm from '@/components/shared/AuditionForm';
import { getCurrentUser } from '@/lib/utils';

const page = async() => {
  const session = await getCurrentUser(); 
 
 
  return (
    <div>
      <AuditionForm id={session?.user?.id} />
    </div>
  )
}

export default page