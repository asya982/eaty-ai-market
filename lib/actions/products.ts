import { Status } from '@/constants/api_response'
import { Category } from '@/models/Category'
import { Product } from '@/models/Product'
import { TApiResponse } from '@/types/api'
import { TCategory, TProducts } from '@/types/products'
import { createAction } from '@/utils/actions'

const perPage = 12
export const getProducts = async ({
  query,
  currentPage,
}: {
  query: string
  currentPage: number
}): Promise<TApiResponse<{ total: number; products: TProducts[] }>> => {
  return await createAction(async () => {
    const total = await Product.countDocuments().where({
      name: { $regex: query, $options: 'i' },
    })

    const products = await Product.find()
      .limit(perPage)
      .skip((currentPage - 1) * perPage)
      .where({ name: { $regex: query, $options: 'i' } })
      .select('-_id, -__v')
      .populate('allergens', '-_id')
      .populate('category', '-_id')
      .lean()
      .exec()

    return {
      status: Status.SUCCESS,
      products: JSON.parse(JSON.stringify(products)),
      total: Math.ceil(total / perPage),
    }
  })
}

export const getProductById = async (
  _id: string,
): Promise<TApiResponse<{ product: TProducts }>> => {
  return await createAction(async () => {
    const product = await Product.findById(_id)
      .populate('allergens', '-_id')
      .populate('category', '-_id')
      .lean()
      .exec()

    if (!product) return { status: Status.NOT_FOUND }

    return {
      status: Status.SUCCESS,
      product: JSON.parse(JSON.stringify(product)),
    }
  })
}

export const getCategories = async (): Promise<
  TApiResponse<{ categories: TCategory[] }>
> => {
  return await createAction(async () => {
    const categories = await Category.find().select('-v').lean().exec()

    return {
      status: Status.SUCCESS,
      categories: JSON.parse(JSON.stringify(categories)),
    }
  })
}
