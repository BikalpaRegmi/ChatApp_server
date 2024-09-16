import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userModel = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      
    },
  },
  { timeStamps: true }
);

userModel.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 9);
  }
  next();
})

export const User = mongoose.model("User", userModel);