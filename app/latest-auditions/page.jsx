import AuditionCard from '@/components/shared/AuditionCard';
import { fetchAllAuditions } from '@/lib/actions/audition.actions'
import React from 'react'

const page = async() => {
  
  const allAuditions = await fetchAllAuditions();
  
  return (
    <div className='flex flex-col' >
      { allAuditions.length<1?<h5 className='mt-2 text-lg font-light pl-5'>
        No Auditions Available Currently
      </h5> :
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
      }
    </div>
  )
}

export default page