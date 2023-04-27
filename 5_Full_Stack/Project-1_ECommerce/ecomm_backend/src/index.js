import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app.js";

// Load Environment Variables
dotenv.config();

const PORT = parseInt(process.env.PORT);
const MONGODB_URI = process.env.MONGODB_URI;

console.log(typeof PORT, PORT);
console.log(typeof MONGODB_URI, MONGODB_URI);

const server = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("DB Connected");
        mongoose.connection.on("error", (err) => {
            console.error("DB Connection Error: ", err);
        });
        app.listen({ port: PORT });
        app.log.info(`Server Listening on PORT ${PORT}}`);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
}

(async () => {
    try {
        await server();
    } catch (error) {
        console.error("ERROR: ", error);
    }
})();