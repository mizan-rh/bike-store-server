import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { globalErrorHandler } from "./modules/middlewares/gloabalErrorHandler";
import router from "./routes";

const app: Application = express();

// parser

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://bike-store-client-three.vercel.app",
    ],
    credentials: true,
  })
);

// application router
// all route
app.use("/api", router);

app.get("/", (req, res) => {
  res.json({ message: "Hello there, welcome!" });
});
app.use(globalErrorHandler);

app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    StatusCode: StatusCodes.NOT_FOUND,
    message: "Route not found",
  });
});
export default app;
