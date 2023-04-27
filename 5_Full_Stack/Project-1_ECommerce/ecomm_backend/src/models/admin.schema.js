import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"],
    },
    sellers: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Seller",
            required: [true, "Seller is required"],
        }],
        default: []
    }
}, { timestamps: true });

export default mongoose.model("Admin", adminSchema);