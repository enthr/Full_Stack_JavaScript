import util from "util";
import crypto from "crypto";
import mongoose from "mongoose";
import isEmail from "validator/es/lib/isEmail";
import isURL from "validator/es/lib/isURL";
import * as argon2 from "argon2";
import JWT from "jsonwebtoken";

import app from "../app";
import authRoles from "../utils/authRoles";

const generateJWTAsync = util.promisify(JWT.sign);
const generateForgotTokenAsync = util.promisify(crypto.randomBytes);

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Name is Required"]
    },
    imgUrl: {
        type: String,
        trim: true,
        validate: {
            validator: function (value) {
                return isURL(value);
            },
            message: "Collection Image URL is Invalid"
        }
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, "Email is Required"],
        unique: [true, "Email Already Exists"],
        validate: {
            validator: function (value) {
                return isEmail(value);
            },
            message: "Email is Invalid"
        }
    },
    phone: {
        type: String,
        trim: true,
        required: [true, "Phone is Required"],
        maxLength: [50, "Phone Must Be Less Than 15 Characters"]
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        minLength: [8, "Password Must Be At Least 8 Characters"],
        select: false
    },
    role: {
        type: String,
        enum: Object.values(authRoles),
        default: authRoles.BUYER,
        required: [true, "Role is Required"]
    },
    isVerified: {
        type: Boolean,
        default: false,
        select: false
    },
    verificationToken: {
        type: String,
        select: false
    },
    verificationExpire: {
        type: Date,
        select: false
    },
    isBlocked: {
        type: Boolean,
        default: false,
        select: false
    },
    forgotPasswordToken: {
        type: String,
        select: false
    },
    forgotPasswordExpire: {
        type: Date,
        select: false
    }
}, { timestamps: true });

// Encrypt Password Before Saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    try {
        this.password = await argon2.hash(this.password);
        return next();
    } catch (error) {
        app.log.error(error);
        return next(new Error("Password Encryption Failed"));
    }
});

userSchema.methods = {
    // Compare Password
    comparePassword: async function (enteredPassword) {
        return await argon2.verify(this.password, enteredPassword);
    },

    // Generate JWT
    generateJWT: async function () {
        const payload = {
            _id: this._id,
            name: this.name,
            email: this.email,
            role: this.role
        };
        const options = {
            expiresIn: process.env.JWT_EXPIRE,
            algorithm: "RS256"
        };
        try {
            const token = await generateJWTAsync(payload, process.env.JWT_SECRET, options);
            return token;
        } catch (error) {
            app.log.error(error);
            throw new Error("JWT Generation Failed");
        }
    },

    // Generate Forgot Password Token
    generateForgotPasswordToken: async function () {
        try {
            const resetToken = (await generateForgotTokenAsync(20)).toString("hex");

            // Store Hashed Token
            const hashToken = await argon2.hash(resetToken);

            this.forgotPasswordToken = hashToken;

            // Time for Token Expiration
            this.forgotPasswordExpire = Date.now() + 20 * 60 * 1000;

            return resetToken;
        } catch (error) {
            app.log.error(error);
            throw new Error("Forgot Password Token Generation Failed");
        }
    },

    // Verify Forgot Password Token
    verifyForgotPasswordToken: async function (resetToken) {
        try {
            const isMatch = await argon2.verify(this.forgotPasswordToken, resetToken);
            return isMatch;
        } catch (error) {
            app.log.error(error);
            throw new Error("Forgot Password Token Verification Failed");
        }
    },

    // Generate Email Verification Token
    generateEmailVerificationToken: async function () {
        try {
            const verificationToken = (await generateForgotTokenAsync(20)).toString("hex");

            // Store Hashed Token
            const hashToken = await argon2.hash(verificationToken);

            this.verificationToken = hashToken;

            // Time for Token Expiration
            this.verificationExpire = Date.now() + 20 * 60 * 1000;

            return verificationToken;
        } catch (error) {
            app.log.error(error);
            throw new Error("Email Verification Token Generation Failed");
        }
    },

    // Verify Email Verification Token
    verifyEmailVerificationToken: async function (verificationToken) {
        try {
            const isMatch = await argon2.verify(this.verificationToken, verificationToken);
            return isMatch;
        } catch (error) {
            app.log.error(error);
            throw new Error("Email Verification Token Verification Failed");
        }
    }
};

export default mongoose.model("User", userSchema);