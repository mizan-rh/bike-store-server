import express from "express";
import { orderController } from "./order.controller";
const router = express.Router();

//Creat a bike a\in db
router.post("/", orderController.createOrders);
router.get("/revenue", orderController.calculateRevenue);
export const ordersRouter = router;
