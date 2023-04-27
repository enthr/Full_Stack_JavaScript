import fastify from "fastify";

const app = fastify({
    logger: (process.env.NODE_ENV === "dev") ? true : false
});

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
        reply.code(400).send({ message: error.message });
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

export default app;