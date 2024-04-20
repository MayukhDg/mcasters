"use server"


import { connectToDB } from "../mongoose"
import Audition from "../models/audition.model";
import User from "../models/user.model";
import { v2 as cloudinary } from 'cloudinary'
import { revalidatePath } from "next/cache";



export const createAudition = async({creator, startDate, endDate, description, address, city, title, pathname, image=""})=>{
   
    try {
     await connectToDB();
     const newAudition = await Audition.create({
        creator, startDate, endDate, description, address, city, title, image 
     })
     await newAudition.save();
     await User.findByIdAndUpdate(creator,{
        $push:{createdAuditions:newAudition._id}
     })
     revalidatePath(pathname)
     return JSON.parse(JSON.stringify(newAudition))
   } catch (error) {
    console.log(error);
   }
}



export const deleteAudition = async({auditionId, userId, pathname})=>{
    try {
      await connectToDB();
      const deletedAudition = await Audition.findByIdAndDelete(auditionId)
      await User.findByIdAndUpdate(userId, {
         $pull:{createdAuditions:deletedAudition._id}
      })
      revalidatePath(pathname)
    } catch (error) {
      console.log(error)
    }  
  
}


export const fetchAllAuditions = async()=>{
   try {
      await connectToDB();
      const allAuditions = await Audition.find({}).populate({
         path:"creator",
         model:User
      }).sort({
         startDate:"asc"
      })
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
      }).limit(5).sort({
         startDate:"asc"
      })
      return JSON.parse(JSON.stringify(userAuditions))

   } catch (error) {
      console.log(error)
   }
}


export async function uploadToCloudinary(path){
   cloudinary.config({ 
      cloud_name: process.env.CLOUDINARY_NAME, 
      api_key: process.env.CLOUDINARY_KEY, 
      api_secret: process.env.CLOUDINARY_SECRET
    });


    try {

      const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
        transformation: [{ width: 1000, height: 752, crop: "scale" }],
      };
  
        
        const result = await cloudinary.uploader.upload(path, options);
        return JSON.parse(JSON.stringify(result))
      } catch (error) {
        console.error(error);
      }

}