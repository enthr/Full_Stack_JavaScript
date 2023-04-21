import mongoose from "mongoose";
import isURL from "validator/es/lib/isURL";

const collectionSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxLength: [150, "Collection Name should be less than 150 characters"],
        required: [true, "Collection Name is Required"],
        lowercase: true
    },
    slug: {
        type: String,
        trim: true,
        maxLength: [100, "Collection Slug should be less than 100 characters"],
        required: [true, "Collection Slug is Required"],
        lowercase: true,
        unique: true
    },
    description: {
        type: String,
        trim: true,
        maxLength: [500, "Collection Description should be less than 500 characters"],
    },
    imgUrl: {
        type: String,
        trim: true,
        required: [true, "Collection Image URL is Required"],
        validate: {
            validator: function (value) {
                return isURL(value);
            },
            message: "Collection Image URL is Invalid"
        }
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SELLER",
        required: [true, "Collection Owner is Required"]
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE"
    }
}, { timestamps: true });

export default mongoose.model("Collection", collectionSchema);