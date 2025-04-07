import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import { ordersRouter } from "./modules/orders/order.routes";
import { ProductRouter } from "./modules/products/product.routes";

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
app.use("/api/products", ProductRouter);
app.use("/api/orders", ordersRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Bike Store Server is on");
});
export default app;
