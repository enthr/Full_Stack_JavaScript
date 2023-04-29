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