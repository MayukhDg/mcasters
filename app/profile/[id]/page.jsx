import { fetchUserAudtions } from '@/lib/actions/audition.actions';
import AuditionCard from '@/components/shared/AuditionCard';
import { getCurrentSession } from '@/lib/session';
import { fetchUser } from '@/lib/actions/user.actions';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import Profile from '@/components/shared/Profile';


const page = async({params}) => {

const session  = await getCurrentSession();
const userAuditions = await fetchUserAudtions(params?.id)
const user = await fetchUser(params?.id) 

if(!user?.onboarded){
  redirect("/onboarding")
}

return (
    <section className="flex flex-col p-5 gap-5 min-h-screen" >
     <Profile userAuditions={userAuditions} user={user} session={session}/>
    </section>
  )
}

export default page