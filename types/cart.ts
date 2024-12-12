import { OrderProduct } from "./dto/order.dto";

export type TCartItem = OrderProduct & {
    name: string;
    img: string;
}