'use client'
import { getCartItems } from '@/utils/saveToCart'
import React from 'react'

export const CartSection = () => {
  const cartItems = getCartItems()
  console.log(cartItems)
  return <div>CartSection</div>
}
