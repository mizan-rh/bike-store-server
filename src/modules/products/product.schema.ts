import mongoose, { Schema } from "mongoose";
import IProduct from "./product.interface";

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      enum: ["Mountain", "Road", "Hybrid", "Electric"],
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, default: true },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

// filter out of already deleted data
productSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

const ProductModel = mongoose.model<IProduct>("Product", productSchema);
export default ProductModel;
