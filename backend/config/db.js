import mongoose from "mongoose";

const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://zerodha123:zerodha123@cluster0.qiphosx.mongodb.net/food-del').then(()=>{
        console.log("DB connected");
    })
}

export default connectDB;