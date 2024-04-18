import { fetchUser, updateUser } from '@/lib/actions/user.actions';
import { getCurrentSession } from '@/lib/session';

const page = async() => {
  
 const session = await getCurrentSession(); 
  
  return (
    <div>
     <button onClick={handleClick} >Complete Onboarding</button>
    </div>
  )
}

export default page