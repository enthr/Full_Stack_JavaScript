import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
    code: {
        type: String,
        required: [true, "Please Enter A Coupon Code"],
        unique: true,
        uppercase: true,
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please Enter A Coupon Description"],
        trim: true,
        maxLength: [50, "Description Cannot Be More Than 50 Characters"]
    },
    discount: {
        method: {
            type: String,
            enum: ["PERCENT", "FIXED"],
            required: [true, "Please Enter A Discount Method"],
            lowercase: true,
            default: "PERCENT"
        },
        value: {
            type: Number,
            required: [true, "Please Enter A Discount Value"],
            min: 0
        },
        maxDiscount: {
            type: Number,
            required: [true, "Please Enter A Max Discount"],
            min: 0
        },
        minOrderAmount: {
            type: Number,
            required: [true, "Please Enter A Min Order Amount"],
            min: 0
        }
    },
    applicableOn: {
        entity: {
            type: String,
            enum: ["All", "Collection", "Product", "SKU"],
            required: [true, "Please Enter An Applicable On"],
            default: "All"
        },
        entities: [{
            type: mongoose.Schema.Types.ObjectId,
            refPath: "applicableOn.entity"
        }]      
    },
    maxUses: {
        type: Number,
        min: 1
    },
    logs: [{
        buyerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Buyer",
            required: [true, "Please Enter A User"]
        },
        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
            required: [true, "Please Enter An Order"]
        },
        discountApplied: {
            type: Number,
            required: [true, "Please Enter A Discount Applied"],
            min: 0
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    expiresAt: {
        type: Date,
        required: [true, "Please Enter An Expiry Date"]
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: [true, "Coupon Must Have A Seller"]
    }
}, { timestamps: true });

export default mongoose.model("Coupon", couponSchema);