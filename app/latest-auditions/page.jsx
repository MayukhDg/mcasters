import AuditionCard from '@/components/shared/AuditionCard';
import { fetchAllAuditions } from '@/lib/actions/audition.actions'
import React from 'react'
import { getCurrentSession } from '@/lib/session';

const page = async() => {
  
  const allAuditions = await fetchAllAuditions();
 const session = await getCurrentSession() 
  
  
  return (
    <div className='flex flex-col h-screen' >
      
      { !allAuditions.length? 
         <div className='flex flex-1 p-5' >
         <h3 className='font-light'>No Auditions posted yet </h3>
         </div>:
       <div  className="flex flex-wrap gap-10 p-5">
      {allAuditions.map((item, index)=>(
        <AuditionCard
        id={item?._id}
        session={session}
        creator={item?.creator?._id}
        key={item?._id} 
        title={item?.title}
        userImage={item?.creator?.image}
        address={item.address}
        city={item.city}
        description={item.description}
        startDate={item.startDate}
        endDate={item.endDate}
        eventImage={item?.image}
        /> 
      ))}
      </div>
      }
    </div>
  )
}

export default page