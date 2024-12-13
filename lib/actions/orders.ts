'use server'

import { createAction } from '@/utils/actions'
import { createOrderDto } from './../../types/dto/order.dto'
import { Status } from '@/constants/api_response'
import { TApiResponse } from '@/types/api'
import { TOrder } from '@/types/cart'
import { Order } from '@/models/Order'

export const orderProducts = async (
  orderDTO: createOrderDto,
  userId: string,
): Promise<TApiResponse<{ orders: TOrder }>> => {
  return await createAction(async () => {
    const preparedProducts = orderDTO.map(el => ({
      product: el.productId,
      quantity: el.quantity,
      price: el.price,
    }))

    const order = await Order.create({
      productsList: preparedProducts,
      user: userId,
    })

    return {
      status: Status.CREATED,
      order: JSON.parse(JSON.stringify(order)),
    }
  })
}

export const getUserOrders = async (
  userId: string,
): Promise<TApiResponse<{ orders: TOrder[] }>> => {
  return await createAction(async () => {
    const orders = await Order.find({ user: userId })
      .sort('-createdAt')
      .populate({ path: 'productsList.product', model: 'Products' })
      .lean()
      .exec()
    return {
      status: Status.SUCCESS,
      orders: JSON.parse(JSON.stringify(orders)),
    }
  })
}
