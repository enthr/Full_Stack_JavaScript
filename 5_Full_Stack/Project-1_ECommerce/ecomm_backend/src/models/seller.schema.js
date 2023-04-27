import mongoose from "mongoose";
import isURL from "validator/es/lib/isURL";

const sellerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"]
    },
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: [true, "Admin is required"]
    },
    businessDetails: {
        businessRegistrationNumber: {
            type: String,
            trim: true,
            required: [true, "Business Registration Number is required"]
        },
        panNumber: {
            type: String,
            trim: true,
            required: [true, "Tax ID is required"]
        },
        businessType: {
            type: String,
            trim: true,
            required: [true, "Business Type is required"]
        },
        permitsAndLicenses: [{
            type: String,
            trim: true,
            validate: {
                validator: function (value) {
                    return isURL(value);
                },
                message: "Invalid URL"
            }
        }]
    },
    bankDetails: {
        accountNumber: {
            type: String,
            trim: true,
            required: [true, "Account Number is required"]
        },
        ifscCode: {
            type: String,
            trim: true,
            required: [true, "IFSC Code is required"]
        },
        bankName: {
            type: String,
            trim: true,
            required: [true, "Bank Name is required"]
        },
        branchName: {
            type: String,
            trim: true,
            required: [true, "Branch Name is required"]
        },
        accountHolderName: {
            type: String,
            trim: true,
            required: [true, "Account Holder Name is required"]
        },
        accountType: {
            type: String,
            trim: true,
            required: [true, "Account Type is required"]
        },
        swiftCode: {
            type: String,
            trim: true,
            required: [true, "Swift Code is required"]
        },
        upiId: {
            type: String,
            trim: true,
            required: [true, "UPI ID is required"]
        }
    },
    taxDetails: {
        gstNumber: {
            type: String,
            trim: true,
            required: [true, "GST Number is required"]
        },
        gstCertificate: {
            type: String,
            trim: true,
            validate: {
                validator: function (value) {
                    return isURL(value);
                },
                message: "Invalid URL"
            }
        }
    },
    location: {
        address: {
            type: String,
            trim: true,
            required: [true, "Address is required"]
        },
        city: {
            type: String,
            trim: true,
            required: [true, "City is required"]
        },
        state: {
            type: String,
            trim: true,
            required: [true, "State is required"]
        },
        country: {
            type: String,
            trim: true,
            required: [true, "Country is required"]
        },
        pincode: {
            type: String,
            trim: true,
            required: [true, "Pincode is required"]
        }
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        maxLength: [500, "Description cannot be more than 500 characters"],
        trim: true,
    },
    paymentMethods: [{
        type: String,
        enum: ["CREDITCARD", "DEBITCARD", "UPI", "NETBANKING"],
        required: [true, "Payment Method is required"]
    }],
    collections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection"
    }],
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    }],
    inventories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Inventory"
    }],
    logistics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Logistic"
    }],
    coupons: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coupon"
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    status: {
        type: String,
        enum: ["PENDING", "APPROVED", "REJECTED", "BLOCKED"],
        default: "PENDING"
    }
}, { timestamps: true });

// Define virtual for calculating rating
sellerSchema.virtual("rating").get(function () {
    if (numProducts === 0) return 0;
    const id = this._id;
    const reviewRating = this.products.reduce(function (acc, product) {
        const total = acc + product.reviews.reduce(function (acc, review) {
            if (review.sellerId == id) {
                return acc + review.rating;
            }
        }, 0);
        return total;
    }, 0);
    const numProducts = this.products.length;
    return reviewRating / numProducts;
});

export default mongoose.model("Seller", sellerSchema);