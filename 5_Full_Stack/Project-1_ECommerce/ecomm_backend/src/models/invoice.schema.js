import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: [true, "Order is required"],
    },
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Buyer",
        required: [true, "Buyer is required"],
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: [true, "Seller is required"],
    },
    paymentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment",
        required: [true, "Payment is required"],
    },
    items: [{
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: [true, "Product ID is required"]
        },
        price: {
          type: Number,
          required: [true, "Product price is required"],
          min: [0, "Product price cannot be less than 0"]
        },
        quantity: {
          type: Number,
          required: [true, "Product quantity is required"],
          min: [0, "Product quantity cannot be less than 0"]
        }
    }],
    subTotal: {
        type: Number,
        required: [true, "Subtotal is required"],
        min: [0, "Subtotal cannot be less than 0"]
    },
    tax: {
        type: Number,
        required: [true, "Tax is required"],
        min: [0, "Tax cannot be less than 0"]
    },
    totalAmount: {
        subtotal: {
            type: Number,
            required: [true, "Order Must Have A Subtotal"]
        },
        currency: {
            type: String,
            enum: ["INR", "USD", "EUR", "GBP", "JPY", "AUD"],
            required: [true, "Order Must Have A Currency"],
            default: "INR"
        },
        discount: {
            type: Number
        },
        tax: {
            type: Number,
            required: [true, "Order Must Have A Tax"]
        },
        shipping: {
            type: Number,
            required: [true, "Order Must Have A Shipping"]
        },
        total: {
            type: Number,
            required: [true, "Order Must Have A Total"]
        }
    }
}, { timestamps: true });

export default mongoose.model("Invoice", invoiceSchema);