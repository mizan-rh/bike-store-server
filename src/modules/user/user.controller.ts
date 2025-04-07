// models/users/user.controller.ts
import { Request, Response } from "express";
import { userServices } from "./user.service";

export const userController = {
  register: async (req: Request, res: Response) => {
    try {
      const user = await userServices.registerUser(req.body);
      res
        .status(201)
        .json({ success: true, message: "User registered", data: user });
    } catch (err: any) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const { token, user } = await userServices.loginUser(email, password);
      res.status(200).json({ success: true, token, user });
    } catch (err: any) {
      res.status(401).json({ success: false, message: err.message });
    }
  },
};
