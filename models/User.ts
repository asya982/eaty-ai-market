import mongoose from 'mongoose'
import { Model } from 'mongoose'

export interface IUser extends mongoose.Document {
  name: string
  email: string
  password: string
}

const UserSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
    maxlength: 60,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
})

export const User: Model<IUser> =
  mongoose.models.Users || mongoose.model<IUser>('Users', UserSchema)
