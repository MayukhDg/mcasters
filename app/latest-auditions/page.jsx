import AuditionCard from '@/components/shared/AuditionCard';
import { fetchAllAuditions } from '@/lib/actions/audition.actions'
import React from 'react'

const page = async() => {
  
  const allAuditions = await fetchAllAuditions();

  if(!allAuditions.length){
    return (
      <div className='flex flex-col pt-3 pl-5' >
       <h3 className='mt-2 text-lg font-light'>No Auditions Available Currently</h3>
      </div>
    )
  }
  
  return (
    <div className='flex flex-col' >
      
      <div  className="flex flex-wrap gap-10 p-5">
      {allAuditions.map((item, index)=>(
        <AuditionCard
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
    </div>
  )
}

export default page