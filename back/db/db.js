import mongoose from 'mongoose';

export async function connectToMongoDB() {
    try {
        await mongoose.connect('mongodb+srv://dexterteam:sundisk123@real.lnnrwpn.mongodb.net/?retryWrites=true&w=majority&appName=real');
        console.log("[+] Successfully connected to MongoDB Atlas");
    } catch (error) {
        console.error("[-] Error connecting to MongoDB Atlas:", error);
    }
}