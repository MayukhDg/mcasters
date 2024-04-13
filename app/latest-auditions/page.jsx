import AuditionCard from '@/components/shared/AuditionCard';
import { fetchAllAuditions } from '@/lib/actions/audition.actions'
import React from 'react'

const page = async() => {
  
  const allAuditions = await fetchAllAuditions();
  
  return (
    <div>
      {allAuditions.map((item, index)=>(
        <AuditionCard
        creator={item?.creator?._id}
        key={item?._id} 
        title={item?.title}
        userImage={item?.creator?.image}
        address={item.address}
        city={item.city}
        description={item.description}
        startData={item.startDate}
        endDate={item.endDate}
        /> 
      ))}
      </div>
  )
}

export default page