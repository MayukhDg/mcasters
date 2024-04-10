"use server"


import { connectToDB } from "../mongoose"
import Audition from "../models/audition.model";
import User from "../models/user.model";



export const createAudition = async({creator, startDate, endDate, description, address, city, title})=>{
   
    try {
     await connectToDB();
     const newAudition = await Audition.create({
        creator, startDate, endDate, description, address, city, title 
     })
     await newAudition.save();
     await User.findByIdAndUpdate(creator,{
        $push:{createdAuditions:newAudition._id}
     })
     return JSON.parse(JSON.stringify(newAudition))
   } catch (error) {
    console.log(error);
   }
}



export const deleteAudition = async({auditionId, userId})=>{
    try {
      await connectToDB();
      const deletedAudition = await Audition.findByIdAndDelete(auditionId)
      await User.findByIdAndUpdate(userId, {
         $pull:{createdAuditions:deletedAudition._id}
      })
    } catch (error) {
      console.log(error)
    }  
  
}


export const fetchAllAuditions = async()=>{
   try {
      await connectToDB();
      const allAuditions = await Audition.find({})
      return JSON.parse(JSON.stringify(allAuditions))
   } catch (error) {
     console.log(error)    
   }  
}


export const fetchUserAudtions = async(userId)=>{
   try {
      await connectToDB();
      const userAuditions = await Audition.find({ creator: { $eq: userId } }).populate({
         path:"creator",
         model:User
      })
      return JSON.parse(JSON.stringify(userAuditions))

   } catch (error) {
      console.log(error)
   }
}