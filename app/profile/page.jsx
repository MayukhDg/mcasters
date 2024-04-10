import { fetchUserAudtions } from '@/lib/actions/audition.actions';
import AuditionCard from '@/components/shared/AuditionCard';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

const page = async () => {
  
 const { user } = await getServerSession(authOptions)
 const auditions = await fetchUserAudtions(user?.id) 
 
 return (
    <div>
       { auditions.map((item)=>(
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