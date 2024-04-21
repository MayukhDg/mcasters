import EditProfileForm from '@/components/shared/EditProfileForm';
import { fetchUser, updateUser } from '@/lib/actions/user.actions';
import { getCurrentSession } from '@/lib/session';

const page = async() => {
  const session = await getCurrentSession(); 
const currentUser = await fetchUser(session?.user?.id) 

  
  return (
    <div className='h-screen'>
       <EditProfileForm  currentUser={currentUser} session={session} />
      </div>
  )
}

export default page