import { IProduct } from "./Product";
import { IUser } from "@/models/User";
import mongoose from "mongoose";

export interface IOrder extends mongoose.Document {
  user: IUser;
  products: [
    {
      product: IProduct;
      quantity: number;
      price: number;
    }
  ];
}

const OrderSchema = new mongoose.Schema<IOrder>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
    },
  ],
}, { timestamps: true });

export const Order =
  mongoose.models.Orders || mongoose.model("Orders", OrderSchema);
