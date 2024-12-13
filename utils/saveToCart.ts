'use client'

import { TCartItem } from '@/types/cart'

export const getCartItems = (): TCartItem[] => {
  if (typeof window === 'undefined') return []
  return JSON.parse(localStorage.getItem('cart') || '[]')
}

export const saveItemToCart = (item: TCartItem) => {
  if (typeof window === 'undefined') return []
  const currentItems = JSON.parse(localStorage.getItem('cart') || '[]')

  localStorage.setItem('cart', JSON.stringify([...currentItems, item]))
}

export const clearCart = () => {
  localStorage.removeItem('cart')
}
