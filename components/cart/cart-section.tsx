'use client'

import React from 'react'

import { Button } from '@nextui-org/button'

import { clearCart, getCartItems } from '@/utils/saveToCart'
import { CartItem } from './cart-item'
import { Status } from '@/constants/api_response'

export const CartSection = () => {
  const cartItems = getCartItems()

  const handleCreate = async () => {
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems), // Send orderDTO data
      })

      const { status } = await response.json()
      if (status === Status.CREATED) {
        clearCart()
      }
    } catch (error) {
      console.error('Order Error:', error)
    }
  }

  if (!cartItems.length) return <div>Your cart is empty</div>

  return (
    <div>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.productId} showControls {...cartItem} />
      ))}
      <section className='mt-4 flex flex-col items-end'>
        <div className='w-screen-md border-t-3 py-4'>
          <section className='flex gap-8'>
            <aside>
              <h2 className='text-2xl font-bold'>Sub-Total</h2>
              <p className='text-gray-500'>
                {cartItems.length} Item{cartItems.length > 1 ? 's' : ''}
              </p>
            </aside>
            <p className='text-4xl font-bold'>
              $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
          </section>
          <Button
            variant='bordered'
            onPress={handleCreate}
            color='warning'
            className='w-full mt-3'
          >
            Buy now!
          </Button>
        </div>
      </section>
    </div>
  )
}
