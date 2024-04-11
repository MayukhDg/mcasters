import { v2 as cloudinary } from 'cloudinary'
import NextResponse from "next/server";

cloudinary.config({ 
    cloud_name: 'dmd0zh8uy', 
    api_key: '626158837347777', 
    api_secret: 'hsMHDKKGCftpBQlIV9HElUUaN_A'
  });


  export async function POST(request){
     const {path} = await request.json();


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