import AuditionForm from '@/components/forms/AuditionForm';
import { fetchUser } from '@/lib/actions/user.actions';
import { getCurrentSession } from '@/lib/session';
import { redirect } from 'next/navigation';

const page = async() => {
  const session = await getCurrentSession(); 
  const currentUser = await fetchUser(session?.user?.id)

  if(!currentUser?.onboarded){
    redirect("/onboarding")
  }
   

  if(currentUser?.role !=="Casting Agency"){
    redirect("/")
  }
 
  return (
    <div>
      <AuditionForm id={session?.user?.id} />
    </div>
  )
}

export default page