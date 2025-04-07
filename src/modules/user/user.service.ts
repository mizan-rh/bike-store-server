// models/users/user.service.ts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser } from "./user.interface";
import { UserModel } from "./user.schemal";

export const userServices = {
  registerUser: async (userData: IUser) => {
    const result = await UserModel.create(userData);
    return result;
  },

  loginUser: async (email: string, password: string) => {
    const user = await UserModel.findOne({ email });
    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d",
      }
    );

    return { token, user };
  },
};
