import fastify from "fastify";
import sensible from "@fastify/sensible";
import cookie from "@fastify/cookie";
import cors from "@fastify/cors";
import formbody from "@fastify/formbody";
import sjson from "secure-json-parse";
import qs from "qs";

import CustomError from "./utils/CustomError.js";
import config from "./config";

const app = fastify({
    logger: (config.NODE_ENV === "DEV") ? true : false
});

app.register(sensible);
app.register(cookie, {
    secret: config.COOKIE_SIGN,
    parseOptions: {
        secure: (config.NODE_ENV === "DEV") ? false : true,
        signed: true,
        sameSite: "strict",
        httpOnly: true,
        path: "/",
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        domain: config.DOMAIN
    }
});
app.register(cors, {
    origin: (config.NODE_ENV === "DEV") ? "*" : config.ALLOWED_ORIGINS,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    preflightContinue: true,
    optionsSuccessStatus: 200,
    maxAge: 86400,
    exposedHeaders: ["Content-Type", "Authorization"],
    preflight: true,
    hideOptionsRoute: true,
    strictPreflight: true
});
app.register(formbody, { parser: async (str) => qs.parse(str) });
app.addContentTypeParser("application/json", { parseAs: "string" }, async (_request, body, done) => {
    try {
        const json = await sjson.parse(body, { protoAction: "error", constructorAction: "error" });
        done(null, json);
    } catch (error) {
        done(new CustomError("Bad Request", 400));
    }
});

app.setErrorHandler(async (error, _request, reply) => {
    try {
        // Handle MongoDB Errors
        if (error.name === "MongoError") {
            app.log.error("MongoDB Error: ", error);
            reply.code(error.code || 500).json({ success: false, message: "DB Error" });
            return;
        }

        // Handle Validation Errors
        if (error.name === "ValidationError") {
            app.log.error("Validation Error: ", error);
            reply.code(error.code || 400).json({ success: false, message: "Incorrect Information" });
            return;
        }

        // Duplicate Key Error
        if (error.name === "DuplicateKeyError") {
            app.log.error("Duplicate Key Error: ", error);
            reply.code(error.code || 409).json({ success: false, message: "Already Exists" });
            return;
        }

        // MongoDocuemnt Not Found
        if (error.name === "DocumentNotFoundError") {
            app.log.error("Document Not Found: ", error);
            reply.code(error.code || 404).json({ success: false, message: "Info Not Found" });
            return;
        }

        // Handle Other Errors
        app.log.error("ERROR: ", error);
        reply.code(error.code || 500).json({ success: false, message: error.message || "Internal Server Error" });
        return;
    } catch (error) {
        app.log.error("ERROR: ", error);
        reply.code(error.code || 500).json({ success: false, message: error.message || "Internal Server Error" });
        return;
    }
});

app.setNotFoundHandler(async (_request, reply) => {
    reply.code(error.code || 404).json({ success: false, message: error.message || "Not Found" });
    return;
});

export default app;