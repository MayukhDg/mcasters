import Image from "next/image"
import { fetchUser } from '@/lib/actions/user.actions';
import { getCurrentSession } from "@/lib/session";
import { redirect } from "next/navigation";

const Home = async() => {
 
  const session = await getCurrentSession()
  const currentUser = await fetchUser(session?.user?.id)


 
  if(!session){
    return (
      <div className='p-5 flex h-screen' >
        <h3 className='leading-[50px] tracking-[2.5px]'>Give flight to your dreams. <br/>
       <span className='font-medium' > Find a gig in your area</span></h3>
        <div className='flex flex-1 justify-center pl-5' >  
         <Image
          src="/hero.jpg"
          priority
          width={150}
          height={150}
          alt="hero"
          className='md:block hidden w-[120%] rotate-12'
         />
        </div>
      </div>
    )
  }

 if(!currentUser?.onboarded){
  redirect("/onboarding")
 }

return (
    <section className='p-5 flex h-screen'>
   <div className='flex flex-col gap-4 flex-1' >
   <h3 className=' leading-[30px] md:leading-[50px] tracking-[1px]' > Welcome {currentUser?.name}</h3>
   <h4 className='font-medium leading-[45px]'>Give flight to your dreams. <br/>
     <span className='' >Find a gig near you</span> </h4>
   </div>
   <div className='flex flex-1 justify-center pl-5' >  
         <Image
          src="/hero.jpg"
          priority
          width={150}
          height={150}
          alt="hero"
          className='md:block hidden w-[80%] rotate-12 mt-5'
         />
        </div>
     </section>
    
  )
}

export default Home