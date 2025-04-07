import bcrypt from "bcrypt";
import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["customer", "admin"], default: "customer" },
    photo: { type: String, default: null },
    age: { type: Number, required: true },
    phone: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false }
);

// hash password before saving

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  }
  next();
});

// set '' after saving password
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const UserModel = mongoose.model<IUser>("User", userSchema);
