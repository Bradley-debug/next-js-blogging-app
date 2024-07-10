import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://kigasiabradley:washington11@cluster0.lygjxqz.mongodb.net/blog-app');
    console.log("DB Connected");
}