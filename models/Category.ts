import mongoose, { Model } from 'mongoose'

export interface ICategory extends mongoose.Document {
  name: string
  icon: string
}

const CategorySchema = new mongoose.Schema<ICategory>({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  icon: { type: String },
})

export const Category: Model<ICategory> =
  mongoose.models.Categories || mongoose.model('Categories', CategorySchema)
