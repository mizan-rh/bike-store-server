import { IUser } from "./user.interface";
import { UserModel } from "./user.schema";

const createUser = async (payload: IUser): Promise<IUser> => {
  const result = await UserModel.create(payload);
  return result;
};
const getAllUser = async () => {
  const result = await UserModel.find();
  return result;
};
const getSingleUser = async (id: string) => {
  const result = await UserModel.findById(id);
  return result;
};
const updateUser = async (id: string, data: Partial<IUser>) => {
  const result = await UserModel.findByIdAndUpdate(id, data, { new: true });
  return result;
};
const deleteUser = async (id: string) => {
  const result = await UserModel.findByIdAndDelete(id);
  return result;
};
export const userService = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
