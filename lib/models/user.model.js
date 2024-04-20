import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: { type: String, required:true },
    email: { type: String, required: true },
    image:{type:String},
    createdAuditions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Audition",
 }],
  onboarded:{
    type:Boolean,
    default:false
  },

  role:{
    type:String,
    default:""
  },

  bio:{
    type:String,
    default:""
  },

  phoneNumber:{
    type:String,
    default:""
  }

})


const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;