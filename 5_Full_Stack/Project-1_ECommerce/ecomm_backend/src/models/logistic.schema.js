import mongoose from "mongoose";

const logisticSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: [true, "Order ID is required"]
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: [true, "Seller ID is required"]
    },
    status: {
        type: String,
        enum: ["PENDING", "CONFIRMED", "SHIPPED", "DELIVERED", "RETURNED"],
        default: "PENDING"
    },
    courierInfo: {
        name: {
            type: String,
            required: [true, "Courier name is required"]
        },
        contactNo: {
            type: String,
            required: [true, "Courier contact is required"]
        },
        trackingNumber: {
            type: String
        },
        trackingUrl: {
            type: String
        },
        estimatedDeliveryDate: {
            type: Date
        },
        deliveryDate: {
            type: Date
        }
    }
}, { timestamps: true });

export default mongoose.model("Logistic", logisticSchema);