import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "Please Enter A Product"]
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: [true, "Please Enter A Seller"]
    },
    skus: [{
        skuId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SKU",
            required: [true, "Please Enter A Sku"]
        },
        quantity: {
            type: Number,
            required: [true, "Please Enter A Quantity"],
            min: [0, "Quantity Should Not Be Less Than 0"]
        }
    }]
}, { timestamps: true });

export default mongoose.model("Inventory", inventorySchema);