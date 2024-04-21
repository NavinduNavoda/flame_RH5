import { connectToMongoDB } from './db/db.js';
import { startServer } from './api/server.js';
import dotenv from 'dotenv';
dotenv.config();

async function startApp() {
    try {
        await connectToMongoDB(process.env.MONGO);

        await startServer(process.env.JWT);

    } catch (error) {
        console.error("[-] Failed to start the application:", error);
    }
}



startApp();