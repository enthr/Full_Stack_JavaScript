import mongoose from "mongoose";
import isURL from "validator/es/lib/isURL";

const reviewSchema = new mongoose.Schema({
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Buyer",
        required: [true, "Please Enter A User"]
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: [true, "Please Enter A Seller"]
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "Please Enter A Product"]
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: [true, "Please Enter An Order"]
    },
    skuId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SKU",
        required: [true, "Please Enter A Sku"]
    },
    rating: {
        type: Number,
        required: [true, "Please Enter A Rating"],
        min: 1,
        max: 5
    },
    review: {
        type: String,
        trim: true,
        required: [true, "Please Enter A Review"],
        maxLength: [1000, "Review Should Not Exceed 500 Characters"]
    },
    assets: [{
        url: {
            type: String,
            required: [true, "Asset URL is Required"],
            validate: {
                validator: function (value) {
                    return isURL(value);
                },
                message: "Invalid URL"
            }
        },
        type: {
            type: String,
            enum: ["image", "video", "thumbnail"],
            required: [true, "Asset Type is Required"]
        }
    }],

}, { timestamps: true });

export default mongoose.model("Review", reviewSchema);