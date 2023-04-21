import fastify from "fastify";

const app = fastify({
    logger: (process.env.NODE_ENV === "dev") ? true : false
});

export default app;