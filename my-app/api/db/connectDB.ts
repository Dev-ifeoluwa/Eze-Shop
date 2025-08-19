import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI as string);
        console.log(`MongoDB is connected: ${conn.connection.host}`)
    } catch (error : any) {
        console.log("Error encounted why connecting to MongoDB: ", error.message)
        process.exit(1);
    }
};