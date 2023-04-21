import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app.js";

// Load Environment Variables
dotenv.config();

const PORT = parseInt(process.env.PORT);
const MONGODB_URI = process.env.MONGODB_URI;

console.log(typeof PORT, PORT);
console.log(typeof MONGODB_URI, MONGODB_URI);

app.setErrorHandler((error, request, reply) => {
    // Handle MongoDB Errors
    if (error.name === "MongoError") {
        // console.error("MongoDB Error: ", error);
        app.log.error("MongoDB Error: ", error);
        reply.code(500).send({ message: "Internal Server Error" });
        return;
    }

    // Handle Validation Errors
    if (error.name === "ValidationError") {
        // console.error("Validation Error: ", error);
        app.log.error("Validation Error: ", error);
        reply.code(400).send({ message: "Invalid Input Data" });
        return;
    }

    // Duplicate Key Error
    if (error.name === "DuplicateKeyError") {
        // console.error("Duplicate Key Error: ", error);
        app.log.error("Duplicate Key Error: ", error);
        reply.code(409).send({ message: "Already Exists" });
        return;
    }

    // Docuemnt Not Found
    if (error.name === "DocumentNotFoundError") {
        // console.error("Document Not Found: ", error);
        app.log.error("Document Not Found: ", error);
        reply.code(404).send({ message: "Not Found" });
        return;
    }

    // Handle Other Errors
    // console.error("ERROR: ", error);
    app.log.error("ERROR: ", error);
    reply.code(500).send({ message: "Internal Server Error" });
});

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