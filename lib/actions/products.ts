import dbConnect from "@/lib/dbConnect";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import { TProducts } from "@/types/products";

export const getProducts = async () => {
  try {
    await dbConnect();

    const products = (await Product.find()
      .limit(5)
      .select("-_id, -__v")
      .populate("allergens", "-_id")
      .populate("category", "-_id")
      .lean()
      .exec()) as unknown as TProducts[];

    return { status: 200, products };
  } catch (error) {
    return { status: 400, error };
  }
};

export const getCategories = async () => {
  try {
    await dbConnect();

    const category = await Category.find().lean().exec();

    return { status: 200, category };
  } catch (error) {
    return { status: 400, error };
  }
};
