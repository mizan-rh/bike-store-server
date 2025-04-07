import IProduct from "./product.interface";
import ProductModel from "./product.schema";
//Post
const creatProductsDB = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};
// Get All
const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};
// Get single
const getSingleProductFromDB = async (productId: string) => {
  const result = await ProductModel.findOne({ _id: productId });
  return result;
};
// Put
const UpdateProductFromDB = async (
  productId: string,
  updateData: Partial<Record<string, any>>
) => {
  const result = await ProductModel.findOneAndUpdate(
    { _id: productId },
    {
      ...updateData,
      updatedAt: new Date(),
    },
    {
      new: true,
    }
  );

  return result;
};

// Delete
const deleteProductFromDB = async (productId: string) => {
  const result = await ProductModel.updateOne(
    { _id: productId },
    { isDeleted: true }
  );
  return result;
};

export const ProductsServices = {
  creatProductsDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  UpdateProductFromDB,
  deleteProductFromDB,
};
