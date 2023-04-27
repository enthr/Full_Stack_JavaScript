import mongoose from "mongoose";

const assistantSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Please Provide User Id"],
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: [true, "Please Provide Seller Id"],
    },
    permissions: {
        type: [{
            permission: {
                type: String,
                enum: ["ORDER", "PRODUCT", "INVENTORY", "LOGISTIC", "COLLECTION", "COUPON", "SKU", "PAYMENT", "CANCEL"],
                required: [true, "Please Provide Permission"],
            },
            create: {
                type: Boolean,
                default: false,
            },
            read: {
                type: Boolean,
                default: false,
            },
            update: {
                type: Boolean,
                default: false,
            },
            delete: {
                type: Boolean,
                default: false,
            }
        }],
        required: [true, "Please Provide Permissions"],
    }
}, { timestamps: true });

export default mongoose.model("Assistant", assistantSchema);