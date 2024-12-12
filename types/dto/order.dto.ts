export type createOrderDto = {
    products: Array<OrderProduct>;
    userId: string;
}

export type OrderProduct = {
    productId: string;
    quantity: number;
    price: number;
}