import mongoose from "mongoose";

export interface IAllergen extends mongoose.Document {
  name: string;
}

const AllergenSchema = new mongoose.Schema<IAllergen>({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
});

export const Allergen =
  mongoose.models.Allergens || mongoose.model("Allergens", AllergenSchema);
