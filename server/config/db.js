import mongoose from "mongoose";

const connectDB = async () => {

    try {
        const conn = mongoose.connect(process.env.MONGO_URI);
        console.log(`connected on ${(await conn).Connection.host}`); 
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;