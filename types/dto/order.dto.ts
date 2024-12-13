export type createOrderDto = Array<OrderProduct>

export type OrderProduct = {
  productId: string
  quantity: number
  price: number
}
