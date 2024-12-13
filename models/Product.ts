import { IAllergen } from '@/models/Allergen'
import { ICategory } from '@/models/Category'
import mongoose, { Model } from 'mongoose'

export interface IProduct extends mongoose.Document {
  name: string
  quantity: number
  price: number
  description: string
  img: string
  category: ICategory
  allergens: IAllergen[]
}

const ProductSchema = new mongoose.Schema<IProduct>({
  name: {
    type: String,
    required: true,
    maxlength: 60,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  price: {
    type: Number,
    required: true,
    min: 5,
  },
  description: {
    type: String,
    required: false,
    maxlength: 500,
  },
  img: {
    type: String,
    required: false,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories',
    required: true,
  },
  allergens: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Allergens',
    },
  ],
})

export const Product: Model<IProduct> =
  mongoose.models.Products || mongoose.model('Products', ProductSchema)
