import mongoose, { Schema } from "mongoose";
import IOrder from "./order.interface";

const orderSchema = new Schema<IOrder>(
  {
    email: { type: String, unique: true, required: true, match: /.+@.+\..+/ },
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true, min: 0 },
  },

  { versionKey: false, timestamps: true }
);

const OrderModele = mongoose.model<IOrder>("Order", orderSchema);
export default OrderModele;
