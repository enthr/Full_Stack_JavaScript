import mongoose from "mongoose";

const cancelSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: [true, "Order is required"]
    },
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Buyer",
        required: [true, "Buyer is required"]
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: [true, "Seller is required"]
    },
    paymentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment",
        required: [true, "Payment is required"]
    },
    buyerReason: {
        type: String
    },
    status: {
        type: String,
        enum: ["PENDING", "APPROVED", "REJECTED"],
        default: "PENDING"
    },
    sellerRejectReason: {
        type: String
    },
    approvedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    cancelType: {
        type: String,
        enum: ["ORDER_CANCELLATION", "PRODUCT_RETURN", "PRODUCT_REFUND"],
        required: [true, "Cancel type is required"]
    },
    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: [true, "Product is required"]
        },
        skuId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SKU",
            required: [true, "Sku is required"]
        },
        quantity: {
            type: Number,
            required: [true, "Quantity is required"],
            min: [1, "Quantity must be greater than 0"]
        }
    }],
    initator: {
        type: String,
        enum: ["BUYER", "SELLER"],
        required: [true, "Initator is required"]
    }
}, { timestamps: true });

export default mongoose.model("Cancel", cancelSchema);