"use client";

import { updateUser } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";



const OnboardingForm = ({session, currentUser}) => {
  
   const router = useRouter();
   
    async function handleClick(e){
    e.preventDefault();
    
    try {
      const updatedUser = await updateUser({
        ...currentUser,
        onboarded:true
      })
      if(updatedUser){
        router.push("/")
      }  
    } catch (error) {
     console.log(error)   
    }
     
   }
  
    return (
    <div>
       <button onClick={handleClick} >Onboard User</button> 
    </div>
  )
}

export default OnboardingForm