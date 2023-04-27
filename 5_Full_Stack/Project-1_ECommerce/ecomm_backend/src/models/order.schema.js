import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    products: {
        type: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: [true, "Order Must Have A Product ID"]
            },
            skuId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SKU",
                required: [true, "Order Must Have A SKU"]
            },
            quantity: {
                type: Number,
                required: [true, "Order Must Have A Quantity"],
                min: [1, "Quantity Must Be Greater Than 0"]
            },
            price: {
                type: Number,
                required: [true, "Order Must Have A Price"],
                min: [1, "Price Must Be Greater Than 1"]
            }
        }],
        required: [true, "Order Must Have At Least One Product"]
    },
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Buyer",
        required: [true, "Order Must Have A Buyer"]
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: [true, "Order Must Have A Seller"]
    },
    shippingAddress: {
        address: {
            type: String,
            required: [true, "Order Must Have A Address"]
        },
        city: {
            type: String,
            required: [true, "Order Must Have A City"]
        },
        state: {
            type: String,
            required: [true, "Order Must Have A State"]
        },
        country: {
            type: String,
            required: [true, "Order Must Have A Country"]
        },
        pincode: {
            type: String,
            required: [true, "Order Must Have A Pincode"]
        }
    },
    logisticId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Logistic",
        required: [true, "Order Must Have A Logistic"]
    },
    couponId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coupon",
    },
    invoices: {
        type: [{
            invoiceId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Invoice",
                required: [true, "Order Must Have Invoice ID"]
            }
        }],
        required: [true, "Order Must Have At Least One Invoice"]
    },
    cancelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cancel"
    },
    paymentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment"
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

export default mongoose.model("Order", orderSchema);