import mongoose from "mongoose";
import isURL from "validator/es/lib/isURL";
import isEmail from "validator/es/lib/isEmail";
import isMobilePhone from "validator/es/lib/isMobilePhone";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Name is Required"],
        maxLength: [150, "Name Should Not Exceed 150 Characters"],
    },
    productCode: {
        type: String,
        trim: true,
        required: [true, "Product Code is Required"],
        maxLength: [100, "Product Code Should Not Exceed 100 Characters"],
        unique: true
    },
    productInventory: [{
        sellerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Seller",
            required: [true, "Seller ID is Required"]
        },
        inventoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Inventory",
            required: [true, "Inventory ID is Required"]
        },
        skus: {
            type: [{
                skuId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "SKU",
                    required: [true, "SKU ID is Required"]
                }
            }],
            required: [true, "Product SKU is Required"]
        }
    }],
    brand: {
        name: {
            type: String,
            trim: true,
            required: [true, "Brand Name is Required"],
            maxLength: [100, "Brand Name Should Not Exceed 100 Characters"]
        },
        address: {
            type: String,
            trim: true,
            required: [true, "Brand Address is Required"],
            maxLength: [250, "Brand Address Should Not Exceed 250 Characters"]
        },
        country: {
            type: String,
            trim: true,
            required: [true, "Brand Country is Required"],
            maxLength: [50, "Brand Country Should Not Exceed 50 Characters"]
        },
        phone: {
            type: String,
            trim: true,
            required: [true, "Brand Phone is Required"],
            maxLength: [15, "Brand Phone Should Not Exceed 15 Characters"],
            validate: {
                validator: function (value) {
                    return isMobilePhone(value, "any", { strictMode: true });
                },
                message: "Invalid Phone Number"
            }
        },
        email: {
            type: String,
            trim: true,
            required: [true, "Brand Email is Required"],
            maxLength: [50, "Brand Email Should Not Exceed 50 Characters"],
            validate: {
                validator: function (value) {
                    return isEmail(value);
                },
                message: "Invalid Email"
            }
        }
    },
    manufacturer: {
        name: {
            type: String,
            trim: true,
            required: [true, "Manufacturer Name is Required"],
            maxLength: [100, "Manufacturer Name Should Not Exceed 100 Characters"]
        },
        address: {
            type: String,
            trim: true,
            required: [true, "Manufacturer Address is Required"],
            maxLength: [250, "Manufacturer Address Should Not Exceed 250 Characters"]
        },
        country: {
            type: String,
            trim: true,
            required: [true, "Manufacturer Country is Required"],
            maxLength: [50, "Manufacturer Country Should Not Exceed 50 Characters"]
        },
        phone: {
            type: String,
            trim: true,
            required: [true, "Manufacturer Phone is Required"],
            maxLength: [15, "Manufacturer Phone Should Not Exceed 15 Characters"],
            validate: {
                validator: function (value) {
                    return isMobilePhone(value, "any", { strictMode: true });
                },
                message: "Invalid Phone Number"
            }
        },
        email: {
            type: String,
            trim: true,
            required: [true, "Manufacturer Email is Required"],
            maxLength: [50, "Manufacturer Email Should Not Exceed 50 Characters"],
            validate: {
                validator: function (value) {
                    return isEmail(value);
                },
                message: "Invalid Email"
            }
        }
    },
    description: {
        type: String,
        maxLength: [5000, "Description Should Not Exceed 5000 Characters"]
    },
    dimensions: {
        length: {
            value: {
                type: Number,
                required: [true, "Length Value is Required"]
            },
            unit: {
                type: String,
                enum: ["cm", "m", "in", "ft"],
                required: [true, "Length Unit is Required"]
            }
        },
        width: {
            value: {
                type: Number,
                required: [true, "Width Value is Required"]
            },
            unit: {
                type: String,
                enum: ["cm", "m", "in", "ft"],
                required: [true, "Width Unit is Required"]
            }
        },
        height: {
            value: {
                type: Number,
                required: [true, "Height Value is Required"]
            },
            unit: {
                type: String,
                enum: ["cm", "m", "in", "ft"],
                required: [true, "Height Unit is Required"]
            }
        },
        weight: {
            value: {
                type: Number,
                required: [true, "Weight Value is Required"]
            },
            unit: {
                type: String,
                enum: ["g", "kg", "oz", "lb"],
                required: [true, "Weight Unit is Required"]
            }
        }
    },
    assets: [{
        url: {
            type: String,
            required: [true, "Asset URL is Required"],
            validate: {
                validator: function (value) {
                    return isURL(value);
                },
                message: "Invalid URL"
            }
        },
        type: {
            type: String,
            enum: ["image", "video", "thumbnail"],
            required: [true, "Asset Type is Required"]
        }
    }],
    reviews: [{
        reviewId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review",
            required: [true, "Review ID is Required"]
        }
    }],
    taxRate: {
        type: Number,
        required: [true, "Tax rate is required"],
        min: [0, "Tax rate cannot be negative"],
        max: [100, "Tax rate cannot be greater than 100"],
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true
    },
    collectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection",
        required: [true, "Collection ID is Required"]
    }
}, { timestamps: true });

// Define virtual for calculating rating
productSchema.virtual("rating").get(function () {
    if (this.reviews.length === 0) {
        return 0;
    }
    const totalRatings = this.reviews.reduce((acc, review) => {
        acc = acc + review.rating;
    }, 0);
    return totalRatings / this.reviews.length;
});

export default mongoose.model("Product", productSchema);