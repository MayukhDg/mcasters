"use client"

import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createAudition, uploadToCloudinary } from '@/lib/actions/audition.actions';
import { useRouter, usePathname } from 'next/navigation';



const AuditionForm = ({id}) => {
  
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [startDate, setStartDate] = useState(new Date().toLocaleDateString());
    const [endDate, setEndDate] = useState(new Date().toLocaleDateString());
    const [city, setCity] = useState("")
    const [eventImage, setEventImage] = useState("")
    const router = useRouter(); 
    const currentDate = new Date()
    const pathname = usePathname() 
   
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

          setEventImage(result)
      };
    }


    
    
    const handleSubmit = async(e)=>{
      
      e.preventDefault();
      const imageUrl = await uploadToCloudinary(eventImage)
      
      if(endDate<startDate){
        return alert("Start date cannot be before the end date")
      }
      
      if(startDate<currentDate){
          return alert("Start date cannot be before current dSate")
        }
      
      try {
        const newEvent = await createAudition({
          creator:id, 
          startDate, 
          endDate, 
          description, 
          address, 
          city,
          title,
          pathname,
          image:imageUrl.url
        })
         
        if(newEvent){
          router.push("/")
        }
               
      } catch (error) {
        console.log(error)
      }
      
    }
  
    return (
    <form onSubmit={handleSubmit} className='auditionform rounded-2xl py-10 w-[85%] mx-3 md:mx-10 flex flex-col items-center justify-start bg-slate-200 gap-10' >
   <input className=" outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70%] md:w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title..." value={title} onChange={e=>setTitle(e.target.value)}/>
   <textarea className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70%] md:w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
   <textarea className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70%] md:w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)}/>
    <div className='flex items-center justify-between w-1/3 md:flex-row flex-col gap-3 ' >
    <DatePicker dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date.toLocaleDateString())} />
    <DatePicker dateFormat="dd/MM/yyyy" selected={endDate} onChange={(date) => setEndDate(date.toLocaleDateString())} />
    </div>
    <input className=" outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70%] md:w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City..." value={city} onChange={e=>setCity(e.target.value)}/>
     <input className="" accept='image/*' onChange={(e) =>handleImageChange(e)}  type="file"  />
    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" variant={"secondary"} >Create Event</button>
     
  </form>
  )
}

export default AuditionForm