
import mongoose from "mongoose"

export const connectDB = async()=>{
    try {
        const connect = await mongoose.connect(process.env.PC_MONGO_URI, {});
        console.log(`MongoDB connected: ${connect.connection.host}`)
    } catch (err) {
        console.log("Error connecting to MongoDB", err);
        process.exit(1);
    }
}


