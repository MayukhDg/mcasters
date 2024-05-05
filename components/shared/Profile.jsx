"use client"


import Image from 'next/image'
import React from 'react'
import AuditionCard from './AuditionCard'
import { useRouter } from 'next/navigation'

const Profile = ({session, user, userAuditions}) => {
  
  const router = useRouter()
  
  return (
    <div className='flex flex-col gap-4' >
    <div className='flex items-center gap-4' >
    <Image
     src={user?.image}
     width={80}
     height={80}
     alt="profile"
     className='rounded-full object-contain'
    />
    <h3>{user?.name} <span className='text-sm font-light' >
        ({ user?.role.toUpperCase() })      
      </span>  </h3>
    { session?.user?.id === user?._id && <button onClick={()=>router.push("/edit-profile")} >Edit Profile</button> }
    </div> 
    <div className='w-[40%] bg-slate-200 p-3 rounded-2xl' >
     <p className='font-semibold text-lg  ' >{user?.bio}</p>
    </div>
     { !userAuditions.length ? 
     <h3 className='font-light'>No Auditions posted yet </h3> :
     <div className='flex flex-col'>
     <h3>Auditions Posted by {user?.name}</h3>
     <div className="flex flex-wrap gap-3 pt-3" >
       
       
       { userAuditions.map((item)=>(
        <AuditionCard
        attendees={item?.attendees}
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
      )) }
    </div>   
     </div>
     }
    </div>
  )
}

export default Profile