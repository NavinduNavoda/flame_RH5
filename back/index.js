import { connectToMongoDB } from './db/db.js';
import { startServer } from './api/server.js';

async function startApp() {
    try {
        await connectToMongoDB();

        await startServer();

    } catch (error) {
        console.error("[-] Failed to start the application:", error);
    }
}



startApp();