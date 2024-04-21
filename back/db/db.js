import mongoose from 'mongoose';

export async function connectToMongoDB(uri) {
    try {
        await mongoose.connect(uri);
        console.log("[+] Successfully connected to MongoDB Atlas");
    } catch (error) {
        console.error("[-] Error connecting to MongoDB Atlas:", error);
    }
}