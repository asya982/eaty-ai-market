'use client'
import React, { useEffect, useState } from 'react'
import { CartItem } from './cart-item'

export const OrdersHistory = () => {
  const [orders, setOrders] = useState([])
  const handleFetchProducts = async () => {
    try {
      const response = await fetch('/api/orders', {
        method: 'GET',
      })

      const { orders } = await response.json()

      setOrders(JSON.parse(orders))
      // setStatus(result.status) // Display order status
    } catch (error) {
      console.error('Order Error:', error)
      // setStatus('SERVER_ERROR')
    }
  }

  useEffect(() => {
    handleFetchProducts()
  }, [])

  console.log(orders)
  if (!orders) return <p>Loading...</p>
  return (
    <div>
      {orders?.map(el => (
        <div key={el.createdAt}>
          <time className='w-full block font-playfair text-xl font-bold py-4 text-center border-y-2 mb-3'>
            {new Date(el.createdAt).toLocaleDateString('en-EN', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour:'2-digit',
              minute: '2-digit'
            })}
          </time>
          <div>
            {el.productsList.map(product => (
              <CartItem
                {...product.product}
                {...product}
                key={el.createdAt + 'item'}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
