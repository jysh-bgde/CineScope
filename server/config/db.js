import mongoose from "mongoose";

const connectDB = async () => {

    try {
        const conn = mongoose.connect(process.env.MONGO_URI);
        
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;