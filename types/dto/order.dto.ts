export type createOrderDto = {
    products: Array<OrderProduct>;
}

export type OrderProduct = {
    productId: string;
    quantity: number;
    price: number;
}