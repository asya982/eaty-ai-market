import { createAction } from '@/utils/actions';
import { createOrderDto } from './../../types/dto/order.dto';
import { Order } from '@/models/Order';
import { Status } from '@/constants/api_response';

export const orderProducts = async (orderDTO: createOrderDto) => {
    await createAction(async () => {
        const order = await Order.create(orderDTO)
        return {
            status: Status.CREATED, order
        }
    }, false)
}