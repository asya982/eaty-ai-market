import { Status } from "@/constants/api_response";
import dbConnect from "@/lib/dbConnect";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import { TProducts } from "@/types/products";

const perPage = 12
export const getProducts = async ({ query, currentPage }: { query: string, currentPage: number }) => {
  try {
    await dbConnect();

    const total = await Product.countDocuments().where({ name: { $regex: query, $options: 'i' }, })

    const products = await Product.find()
      .limit(perPage)
      .skip((currentPage - 1) * perPage)
      .where({ name: { $regex: query, $options: 'i' }, })
      .select("-_id, -__v")
      .populate("allergens", "-_id")
      .populate("category", "-_id")
      .lean()
      .exec();


    return { status: Status.SUCCESS, products: JSON.parse(JSON.stringify(products)), total: Math.ceil(total / perPage) };
  } catch (error) {
    return { status: Status.SERVER_ERROR, error };
  }
};

export const getProductById = async (_id: string) => {
  try {
    await dbConnect();

    const product = await Product.findById(_id)
      .populate("allergens", "-_id")
      .populate("category", "-_id")
      .lean()
      .exec();

    if (!product) return { status: Status.NOT_FOUND }

    return { status: Status.SUCCESS, product: JSON.parse(JSON.stringify(product)) };
  } catch (error) {
    return { status: Status.SERVER_ERROR, error };
  }
}

export const getCategories = async () => {
  try {
    await dbConnect();

    const categories = await Category.find().select('-v').lean().exec();

    return { status: Status.SUCCESS, categories: JSON.parse(JSON.stringify(categories)) };
  } catch (error) {
    return { status: Status.SERVER_ERROR, error };
  }
};
