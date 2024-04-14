import mongoose from "mongoose";


const auditionSchema = new mongoose.Schema({
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"

    },

    title:{
        type:String,
        required:true
    },

    startDate:{
        type:Date,
        required:true,
    },

    endDate:{
        type:Date,
        required:true,
    },

    description:{
        type:String,
        required:true
    },

    address:{
        type:String, 
        required:true,
    },

    city:{
        type:String, 
        required:true,
    },

    createdAt:{
        type:Date,
        default:Date.now
    },

    image:{
        type:String,
        default:""
    }
})


const Audition = mongoose.models.Audition || mongoose.model("Audition", auditionSchema);

export default Audition;