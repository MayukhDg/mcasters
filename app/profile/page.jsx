"use client"


import { fetchUserAudtions } from '@/lib/actions/audition.actions';
import AuditionCard from '@/components/shared/AuditionCard';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

const page =  () => {
 
const [ userAuditions, setUserAuditions ] = useState([]);
const { data:session } = useSession();

useEffect(()=>{
  fetchUserAudtions(session?.user?.id).then(data=>setUserAuditions(data));

},[session?.user?.id])
 
 
 return (
    <div className="flex flex-wrap gap-3 p-5" >
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