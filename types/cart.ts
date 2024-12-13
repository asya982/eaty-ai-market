import { TProducts } from '@/types/products'
import { OrderProduct } from './dto/order.dto'
import { TUser } from '@/types/user'

export type TCartItem = OrderProduct & {
  name: string
  img: string
}

export type TOrder = {
  _id: string
  productsList: { product: TProducts; quantity: number; price: number }[]
  user: TUser
  createdAt: Date
  updateAt: Date
}
