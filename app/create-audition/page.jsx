import AuditionForm from '@/components/shared/AuditionForm';
import { getCurrentSession } from '@/lib/session';

const page = async() => {
  const session = await getCurrentSession(); 
 
 
  return (
    <div>
      <AuditionForm id={session?.user?.id} />
    </div>
  )
}

export default page