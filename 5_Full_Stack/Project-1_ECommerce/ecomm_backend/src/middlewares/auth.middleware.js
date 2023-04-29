import { promisify } from "util";
import JWT from "jsonwebtoken";
import User from "../models/user.schema.js";
import { asyncPreHandler } from "../utils/asyncHandler.js";
import CustomError from "../utils/CustomError.js";
import config from "../config/index.js";

const verifyJWTAsync = promisify(JWT.verify);

export const isLoggedIn = asyncPreHandler(async (request, _reply, done) => {
    let token;

    if (request.cookie.token || (request.headers.authorization && request.headers.authorization.startsWith("Bearer"))) {
        token = request.cookies.token || request.headers.authorization.split(" ")[1];
    }

    if (!token) {
        done(new CustomError("Not Authorized", 401), false);
    }

    try {
        const decodedJWT = await verifyJWTAsync(token, config.JWT_SECRET);
        request.user = await User.findById(decodedJWT._id);
        done(null, true);
    } catch (error) {
        app.log.error("ERROR: ", error);
        done(new CustomError("Not Authorized", 401), false);
    }
});