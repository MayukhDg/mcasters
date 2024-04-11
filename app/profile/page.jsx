"use client"


import { fetchUserAudtions } from '@/lib/actions/audition.actions';
import AuditionCard from '@/components/shared/AuditionCard';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const page =  () => {
 
const [ userAuditions, setUserAuditions ] = useState([]);
const serachParams = useSearchParams();
const id = serachParams.get("id");

useEffect(()=>{
  fetchUserAudtions(id).then(data=>setUserAuditions(data));
},[id])
 
 
 return (
    <div>
       { userAuditions.map((item)=>(
        <AuditionCard creator={item?.creator?._id}
        key={item?._id} 
        title={item?.title}
        userImage={item?.creator?.image}
        address={item.address}
        city={item.city}
        description={item.description}
        startData={item.startDate}
        endDate={item.endDate}

        
        /> 
      )) }
    </div>
  )
}

export default page