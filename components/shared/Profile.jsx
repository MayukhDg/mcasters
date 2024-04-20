import Image from 'next/image'
import React from 'react'
import AuditionCard from './AuditionCard'

const Profile = ({session, user, userAuditions}) => {
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
    <h3>{user?.name}</h3>
    { session?.user?.id === user?._id && <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >Edit Profile</button> }
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