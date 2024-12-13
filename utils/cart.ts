export const calculateTotalPrice = (quantity: number, price: number): string =>
  '$' + (price * quantity).toFixed(2)
