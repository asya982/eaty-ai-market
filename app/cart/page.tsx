'use client'

import React from 'react'

import { Tab, Tabs } from '@nextui-org/tabs'

import { CartSection } from '@/components/cart/cart-section'
import { OrdersHistory } from '@/components/cart/orders-history'

const Cart = () => {
  return (
    <div>
      <Tabs size='lg' aria-label='Tabs variants' variant='underlined'>
        <Tab key='cart' title='Cart'>
          <CartSection />
        </Tab>
        <Tab key='orders' title='Orders history'>
          <OrdersHistory />
        </Tab>
      </Tabs>
    </div>
  )
}

export default Cart
