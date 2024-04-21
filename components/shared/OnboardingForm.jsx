"use client";

import { updateUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OptionsBox from "./OptionsBox";
import { uploadToCloudinary } from "@/lib/actions/audition.actions";



const OnboardingForm = ({session, currentUser}) => {
  
  
  const [role, setRole]  = useState("");
  const [bio, setBio] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); 
  const roles = [ "Casting Agency", "actor", "model", "DJ", "Comedian", "Other"]
 const [userName, setUserName] = useState(currentUser?.name)
 const [image, setImage] = useState("");  
  
 
 const router = useRouter();
   
  
 const handleImageChange = (e)=>{
  e.preventDefault();

    const file = e.target.files[0];
  
  if (!file) return;

  if (!file.type.includes('image')) {
      alert('Please upload an image!');

      return;
  }

  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = () => {
      const result = reader.result;

      setImage(result)
  };
}

 
 
 async function handleClick(e){

    e.preventDefault();
    const imageUrl = await uploadToCloudinary(image)
    
    try {
      const updatedUser = await updateUser({
        ...currentUser,
        userName, 
        image: imageUrl.url, 
        phoneNumber,
        bio, 
        role, 
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
    
      <form onSubmit={handleClick}  className='auditionform rounded-2xl py-10 w-[85%] mx-3 md:mx-10 flex flex-col items-center justify-start bg-slate-200 gap-10' >
       <div className="flex items-center gap-3" >
        <Image
          src={session?.user?.image}
          alt="profile"
          height={80}
          width={80}
          className="object-contain rounded-full"
        />
       <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Update profile Pic</label>
       <input accept='image/*' onChange={(e) =>handleImageChange(e)} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"></input>
       </div>

       <input className=" outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70%] md:w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Name..." value={userName} onChange={e=>setUserName(e.target.value)} />
       <input className=" outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70%] md:w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone number" value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)} />
       <textarea placeholder="Bio" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70%] md:w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={bio} onChange={e=>setBio(e.target.value)} />
       <OptionsBox roles={roles}/>
       <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" >Complete onboarding</button>
       
      </form>
    
  )
}

export default OnboardingForm