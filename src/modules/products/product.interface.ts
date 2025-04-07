import { Document } from "mongoose";

interface IProduct extends Document {
  name: string;
  brand: string;
  price: number;
  category: "Mountain" | "Road" | "Hybrid" | "Electric";
  description: string;
  quantity: number;
  inStock: boolean;

  isDeleted?: boolean;
}
export default IProduct;
