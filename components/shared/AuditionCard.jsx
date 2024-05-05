"use client";

import { addUserToEvent, deleteAudition } from '@/lib/actions/audition.actions';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const AuditionCard = ({id, session, attendees, creator, title, userImage, address, city, description, startDate, endDate, eventImage}) => {
   
  const pathname = usePathname();
  
  const handleDelete = async(e)=>{
    e.preventDefault()
    const confirmDelete = confirm("Are you sure you want to delete this event?")
    
    if(confirmDelete){
      try {
        await deleteAudition({
         auditionId:id, userId:creator, pathname
        })
      } catch (error) {
        console.log(error)     
      }
    }
    
  }

  const registerForEvent = async(e)=>{
    e.preventDefault()
    const isUserConfirmed = confirm("Are you sure you want to attend this event?")
    if(isUserConfirmed){
      const isUserAttendingEvent = attendees?.find(attendee=>attendee._id === creator)
      if(isUserAttendingEvent){
        return alert("You are already attending this event")
      }
     const eventAdded =  await addUserToEvent({
        auditionId:id, userId:creator, pathname
      })
      if(eventAdded){
        return alert("You are attending this Event!")
      }
    } 
    

  }
  
  return (
    <div className="flex flex-col auditionform p-6 gap-2 shadow-lg rounded-lg mt-2" >
     <div className='flex gap-3 items-center'>
      <Link href={`/profile/${creator}`} >
      <Image
        src={userImage}
        height={45}
        width={50}
        alt="user"
        className="object-contain rounded-full"
      />
       </Link>
      <p className='text-2xl font-medium' >{title}</p>   
      { creator === session?.user?.id && <button onClick={handleDelete}>
        <Image
          src="/trash.png"
          height={20}
          width={20}
          alt="trash"
        />
      </button> }
     </div>
     <Image
       src={eventImage}
       height={150}
       width={150}
       className="rounded-2xl"
       alt="event"
     />
      <p className='text-lg font-medium' >What we are looking for: {description}</p>
      <p className='text-lg font-medium' >Address: {address}</p> 
      <p className='text-lg font-medium' >City: {city}</p> 
      <div className='flex gap-3 items-center'>
      <p className='text-lg font-medium' >Start Date: {startDate.split("T")[0]}</p> 
      <p className='text-lg font-medium' >End Date: {endDate.split("T")[0]}</p>  
      </div>
     { <button onClick={registerForEvent} >Register For Event</button>}
     <div className='flex items-center gap-3 mt-3' >
     { attendees?.length>0 && attendees?.slice(0,5).map((item)=>(
      <Link key={item?._id} href={`/profile/${item?._id}`} >
      <Image
        src={item?.image}
        height={35}
        width={35}
        alt="attendee"
        className='rounded-full'
      />
      </Link>
     )) }
     </div>
    </div>
  )
}

export default AuditionCard