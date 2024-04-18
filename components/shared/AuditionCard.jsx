import Image from 'next/image'
import Link from 'next/link'

const AuditionCard = ({creator, title, userImage, address, city, description, startDate, endDate, eventImage}) => {
  
  return (
    <div className="flex flex-col auditionform p-6 gap-2 shadow-lg rounded-lg mt-2" >
     <div className='flex gap-3 items-center'>
      <Link href={`/profile/${creator}`} >
      <Image
        src={userImage}
        height={25}
        width={25}
        alt="user"
        className="object-contain rounded-full"
      />
       </Link>
      <p className='text-2xl font-medium' >{title}</p>   
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