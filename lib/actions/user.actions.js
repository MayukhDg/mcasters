"use server"

import Audition from "../models/audition.model";
import User from "../models/user.model"; 
import { connectToDB } from "../mongoose";



export const updateUser = async({userName, email, image, onboarded})=>{
    try {
      await connectToDB();
      const newUser = await User.findOneAndUpdate({email}, {
       email, name:userName, image, onboarded
      },
      {upsert:true, new:true},
      
      )
      return JSON.parse(JSON.stringify(newUser))  
    } catch (error) {
      console.log(error);
    }
}


export const fetchUser = async(clerkId)=>{
   try {
    await connectToDB();
    const user = await User.findOne({clerkId}).populate({
      path:"createdAuditions",
      model:Audition,
      populate:{
        path:"creator",
        model:User
      } 
    })
     return JSON.parse(JSON.stringify(user));
   } catch (error) {
     console.log(error)
   }
}