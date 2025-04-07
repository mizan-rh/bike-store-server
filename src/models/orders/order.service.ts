import ProductModel from "../products/product.schema";
import IOrder from "./order.interface";
import { default as OrderModele, default as OrderModle } from "./order.schema";

const createOrderFromDB = async (orderInfo: IOrder) => {
  const { email, product, quantity, totalPrice } = orderInfo;
  try {
    const productData = await ProductModel.findById({ _id: product });
    if (!productData || productData.isDeleted) {
      return "not found";
    }
    if (productData.quantity < quantity) {
      return "out of stock";
    }

    productData.quantity -= quantity;

    if (productData.quantity === 0) {
      productData.inStock = false;
    }
    await productData.save();

    const result = await OrderModle.create(orderInfo);
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
//Calculate Revenue from Orders
const CalculateRevenueOrderFromDB = async () => {
  const result = await OrderModele.aggregate([
    {
      $group: {
        _id: "null",
        totalRevenue: { $sum: "$totalPrice" },
      },
    },
    {
      $project: {
        _id: 0,
      },
    },
  ]);
  return result;
};

export const orderServices = {
  createOrderFromDB,
  CalculateRevenueOrderFromDB,
};
