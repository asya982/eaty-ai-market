import { IProduct } from './Product'
import { IUser } from '@/models/User'
import mongoose, { Model } from 'mongoose'
export interface IOrder extends mongoose.Document {
  user: IUser
  productsList: [
    {
      product: IProduct
      quantity: number
      price: number
    },
  ]
}

const OrderSchema = new mongoose.Schema<IOrder>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    productsList: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Products',
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
  },
  { timestamps: true },
)

export const Order: Model<IOrder> =
  mongoose.models.Orders || mongoose.model('Orders', OrderSchema)
