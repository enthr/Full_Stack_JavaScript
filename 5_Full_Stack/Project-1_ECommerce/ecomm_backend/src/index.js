import mongoose from "mongoose";

import config from "./config/index.js";
import app from "./app.js";

const server = async () => {
    try {
        await mongoose.connect(config.MONGODB_URI);
        console.log("DB Connected");
        mongoose.connection.on("error", (err) => {
            console.error("DB Connection Error: ", err);
        });

        await app.listen({ port: config.PORT });
        app.log.info(`Server Listening on PORT ${config.PORT}}`);
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