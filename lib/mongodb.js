import mongoose from "mongoose";


const connectionToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to database");
    } catch (err) {
        console.error( err);
    }
};

export default connectionToDatabase;