// models/users/user.interface.ts

export interface IUser {
  name: string;
  email: string;
  photo?: string | null;
  age: number;
  phone: number;
  password: string;
  role: "customer" | "admin";
}
