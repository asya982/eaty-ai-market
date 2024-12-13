import mongoose, { Model } from 'mongoose'

export interface IAllergen extends mongoose.Document {
  name: string
}

const AllergenSchema = new mongoose.Schema<IAllergen>({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
})

export const Allergen: Model<IAllergen> =
  mongoose.models.Allergens || mongoose.model('Allergens', AllergenSchema)
