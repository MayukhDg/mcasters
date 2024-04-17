"use client"

import { fetchUserAudtions } from '@/lib/actions/audition.actions';
import AuditionCard from '@/components/shared/AuditionCard';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

const page = () => {

const  { data:session } = useSession();
const [userAuditions, setUserAuditions] = useState([])

useEffect(()=>{
  const setAuditions = async()=>{
   await fetchUserAudtions(session?.user?.id).then(data=>setUserAuditions(data));
  }
  setAuditions()
},[])
 
 
 return (
    <div className="flex flex-col p-5" >
      <h3>Auditions Posted By {session?.user?.name || "User"}</h3>
       
       
       
      <div className="flex flex-wrap gap-3 pt-3" >
       
       
       { userAuditions.map((item)=>(
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
      )) }
    </div>
    </div>
  )
}

export default page