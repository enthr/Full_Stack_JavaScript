export const asyncHandler = (fn) => async (request, reply) => {
    try {
        await fn(request, reply);
    } catch (error) {
        app.log.error("ERROR: ", error);
        reply.code(error.code || 500).json({ success: false, message: error.message || "Internal Server Error" });
    }
};

export const asyncPreHandler = (fn) => async (request, reply, done) => {
    try {
        await fn(request, reply, done);
    } catch (error) {
        app.log.error("ERROR: ", error);
        reply.code(error.code || 500).json({ success: false, message: error.message || "Internal Server Error" });
    }
}