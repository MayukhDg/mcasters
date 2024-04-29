"use client";

import { deleteAudition } from '@/lib/actions/audition.actions';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const AuditionCard = ({id, session, creator, title, userImage, address, city, description, startDate, endDate, eventImage}) => {
   
  const pathname = usePathname();
  
  const handleDelete = async(e)=>{
    e.preventDefault()

    try {
      await deleteAudition({
       auditionId:id, userId:creator, pathname
      })
    } catch (error) {
      console.log(error)     
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
    </div>
  )
}

export default AuditionCard