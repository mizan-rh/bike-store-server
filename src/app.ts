import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import { ordersRouter } from "./models/orders/order.routes";
import { ProductRoutes } from "./models/products/product.routes";

const app: Application = express();
//persers
app.use(express.json());
app.use(cors());
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    status: false,
  });
  next();
});

//application routes
app.use("/api/products", ProductRoutes);
app.use("/api/orders", ordersRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
export default app;
