import { FastifyError } from "fastify";

class CustomError extends FastifyError {
    constructor(message, code) {
        super(message);
        this.code = code;
    };
};

export default CustomError;