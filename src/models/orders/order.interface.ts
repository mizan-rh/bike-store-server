import mongoose, { Document } from "mongoose";

interface IOrder extends Document {
  email: string;
  product: mongoose.Types.ObjectId;
  quantity: number;
  totalPrice: number;

  isCanceled: boolean;
}
export default IOrder;
