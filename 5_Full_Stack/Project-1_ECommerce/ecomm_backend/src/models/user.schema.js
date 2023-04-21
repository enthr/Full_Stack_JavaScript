import mongoose from "mongoose";
import isEmail from "validator/es/lib/isEmail";
import * as argon2 from "argon2";

import authRoles from "../utils/authRoles";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxLength: [50, "Name Must Be less than 50 characters"],
        required: [true, "Name is Required"]
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
    } catch (error) {
        return next(error);
    }
    return next();
});

userSchema.methods = {
    // Compare Password
    comparePassword: async function (enteredPassword) {
        return await argon2.verify(this.password, enteredPassword);
    },
}

export default mongoose.model("User", userSchema);