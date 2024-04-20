import OnboardingForm from '@/components/shared/OnboardingForm';
import { fetchUser, updateUser } from '@/lib/actions/user.actions';
import { getCurrentSession } from '@/lib/session';

const page = async() => {
  const session = await getCurrentSession(); 
const currentUser = await fetchUser(session?.user?.id) 

  
  return (
    <div className='h-screen'>
       <OnboardingForm  currentUser={currentUser} session={session} />
      </div>
  )
}

export default page