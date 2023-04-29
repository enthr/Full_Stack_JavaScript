import { asyncHandler } from "../utils/asyncHandler.js";
import CustomError from "../utils/CustomError.js";
import User from "../models/user.schema.js";

/*
* @REGISTER
* @route: /api/v1/auth/register
* @description: User Register Controller
* @returns: User Object
*/
export const register = asyncHandler(async (request, reply) => {
    const { name, email, phone, password, role } = request.body;

    if (!name || !email || !form || !password || !role) {
        throw new CustomError("Please Provide All The Required Fields", 400);
    }

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
        throw new CustomError("User Already Exists", 409);
    }

    const newUser = await User.create({
        name: name,
        email: email,
        phone: phone,
        password: password,
        role: role
    });

    const token = await newUser.generateJWT();

    newUser.password = undefined;

    reply.setCookie("token", token);
    reply.code(200).json({ success: true, token: token, data: newUser });
});

/*
* @LOGIN
* @route: /api/v1/auth/login
* @description: User Login Controller
* @returns: User Object
*/
export const login = asyncHandler(async (request, reply) => {
    const { email, password } = request.body;

    if (!email || !password) {
        throw new CustomError("Please Provide Email And Password", 400);
    }

    const user = await User.findOne({ email: email });

    if (!user) {
        throw new CustomError("Invalid Credentials", 401);
    }

    if (user.isBlocked) {
        throw new CustomError("Your Account Has Been Blocked", 403);
    }

    if (!user.isVerified) {
        throw new CustomError("Please Verify Your Email", 403);
    }

    const isPassMatch = await user.comparePassword(password);

    if (isPassMatch) {
        const token = await user.generateJWT();
        reply.setCookie("token", token);
        reply.code(200).json({ success: true, token: token, data: user });
    }

    throw new CustomError("Invalid Credentials", 401);
});

/*
* @LOGOUT
* @route: /api/v1/auth/logout
* @description: User Logout Controller, Remove token from cookie
* @returns: success
*/
export const logout = asyncHandler(async (_request, reply) => {
    reply.clearCookie("token");
    reply.code(200).json({ success: true, data: {} });
});