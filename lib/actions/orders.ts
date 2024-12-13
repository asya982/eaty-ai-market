'use server'

import { createAction } from '@/utils/actions';
import { createOrderDto } from './../../types/dto/order.dto';
import { Order } from '@/models/Order';
import { Status } from '@/constants/api_response';
import { Product } from '@/models/Product';

export const orderProducts = async (orderDTO: createOrderDto, userId: string) => {
    return await createAction(async () => {
        const preparedProducts = orderDTO.map(el => ({ product: el.productId, quantity: el.quantity, price: el.price }))
        const order = await Order.create({ productsList: preparedProducts, user: userId })
        console.log(order)
        return {
            status: Status.CREATED, order: order.toJSON()
        }
    })
}

export const getUserProducts = async (userId: string) => {
    return await createAction(async () => {
        const orders = await Order.find({ user: userId }).populate({ path: 'productsList.product', model: 'Products' }).lean().exec()
        return {
            status: Status.SUCCESS,
            orders: JSON.stringify(orders)
        }
    })
}