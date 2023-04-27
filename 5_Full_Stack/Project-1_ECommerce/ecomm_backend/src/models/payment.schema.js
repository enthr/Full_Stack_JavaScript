import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
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
    paymentMethod: {
        type: String,
        enum: ["CREDITCARD", "DEBITCARD", "UPI", "NETBANKING"],
        required: [true, "Payment method is required"]
    },
    paymentStatus: {
        type: String,
        enum: ["PENDING", "SUCCESS", "FAILED", "CANCELLED", "REFUNDED"],
        default: "PENDING"
    },
    paymentAmount: {
        type: Number,
        required: [true, "Payment amount is required"],
        min: [0, "Payment amount cannot be less than 0"]
    },
    paymentResponse: {
        type: Object
    },
    paymentDate: {
        type: Date
    },
    paymentRefundDate: {
        type: Date
    },
    paymentRefundAmount: {
        type: Number,
        min: [0, "Payment refund amount cannot be less than 0"]
    },
    paymentRefundResponse: {
        type: Object
    },
    cancelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cancel"
    }
}, { timestamps: true });

export default mongoose.model("Payment", paymentSchema);