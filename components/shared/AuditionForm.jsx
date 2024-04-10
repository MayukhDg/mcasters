"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createAudition } from '@/lib/actions/audition.actions';
import { useRouter } from 'next/navigation';
import { fetchUser } from '@/lib/actions/user.actions';

const AuditionForm = ({id}) => {
  
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [city, setCity] = useState("")
    const router = useRouter(); 
    
    
    const handleSubmit = async(e)=>{
      e.preventDefault();
      try {
        const newEvent = await createAudition({
          creator:id, 
          startDate, 
          endDate, 
          description, 
          address, 
          city,
          title
        })
         
        if(newEvent){
          router.push("/")
        }
               
      } catch (error) {
        console.log(error)
      }
      
    }
  
    return (
    <form onSubmit={handleSubmit} className='auditionform rounded-2xl py-10 w-full mx-10 flex flex-col items-center justify-start bg-slate-200 gap-10' >
   <input className=" outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title..." value={title} onChange={e=>setTitle(e.target.value)}/>
   <textarea className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
   <textarea className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)}/>
    <div className='flex items-center justify-between w-1/3 ' >
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
    </div>
    <input className=" outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City..." value={city} onChange={e=>setCity(e.target.value)}/>
    <Button type="submit" variant={"secondary"} >Create Event</Button>
  </form>
  )
}

export default AuditionForm