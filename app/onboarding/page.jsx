import OnboardingForm from '@/components/forms/OnboardingForm';
import { fetchUser, updateUser } from '@/lib/actions/user.actions';
import { getCurrentSession } from '@/lib/session';
import { redirect } from "next/navigation";

const page = async() => {
  
const session = await getCurrentSession(); 
const currentUser = await fetchUser(session?.user?.id) 


if(currentUser?.onboarded){
  redirect("/")
}
  
  return (
    <div>
     <OnboardingForm  currentUser={currentUser} session={session} />
    </div>
  )
}

export default page