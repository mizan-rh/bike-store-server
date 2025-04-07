import { Request, Response } from "express";
import { ProductsServices } from "./product.service";

// Create Product Data
const creatProducts = async (req: Request, res: Response) => {
  try {
    const productData = req?.body;
    const result = await ProductsServices.creatProductsDB(productData);
    res.status(200).json({
      success: true,
      message: "Bike created successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(400).send({
      message: "ValidationError",
      success: false,
      error: err.error || err.name || "Unknown Error",
      stack: err?.stack,
    });
  }
};
//Get All Product Data
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductsServices.getAllProductFromDB();
    res.status(200).json({
      success: true,
      message: "Bikes retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(400).send({
      success: false,
      message: "Validation failed",
      error: err.error || err.name || "UnKnown Error",
      stack: err?.stack,
    });
  }
};

// Get Single Prodact Data
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductsServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Bike retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(400).send({
      success: false,
      message: "Validation failed",
      error: err.errorn || err.name || "Unkown Error",
      stack: err?.stack,
    });
  }
};
// Deleted Single Prodact Data
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductsServices.deleteProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Bike is deleted successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(400).send({
      success: false,
      message: "Validation failed",
      error: err.errorn || err.name || "Unkown Error",
      stack: err?.stack,
    });
  }
};

//Put Single Prodact Data
const updateProduct = async (req: Request, res: Response) => {
  try {
    const bikeId = req?.params?.productId;
    const updateData = req.body;
    if (!bikeId) {
      res.status(400).json({
        message: "Product ID is required",
        status: false,
      });
    }

    const result = await ProductsServices.UpdateProductFromDB(
      bikeId,
      updateData
    );

    res.status(200).json({
      message: "Bike updated successfully",
      status: true,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      message: "Validation failed",
      status: false,
      error: err.errorn || err.name || "Unkown Error",
      stack: err?.stack,
    });
  }
};
export const ProductController = {
  creatProducts,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
