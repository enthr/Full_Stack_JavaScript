import mongoose from "mongoose";

const skuSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "Product ID is required"],
    },
    inventoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Inventory",
        required: [true, "Inventory ID is required"]
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: [true, "Seller ID is required"]
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true,
    },
    skuCode: {
        type: String,
        required: [true, "Code is required"],
        unique: true,
    },
    price: {
        mrp: {
            type: Number,
            required: [true, "MRP is required"],
        },
        currentPrice: {
            type: Number,
            required: [true, "Current price is required"],
        },
    },
    description: {
        type: String,
        maxLength: [2500, "Description Should Not Exceed 2500 Characters"]
    },
}, { timestamps: true });

export default mongoose.model("SKU", skuSchema);