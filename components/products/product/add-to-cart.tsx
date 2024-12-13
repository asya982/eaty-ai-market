'use client'
import React, { FC, useState } from 'react'
import { ShoppingCart } from '@geist-ui/icons'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { saveItemToCart } from '@/utils/saveToCart'

type TAddToCartProps = {
  productId: string
  price: number
  img: string
  name: string
  initialCount?: number
}

export const AddToCart: FC<TAddToCartProps> = ({
  productId,
  price,
  img,
  name,
}) => {
  const [itemCount, setItemCount] = useState<number>(1)

  const onNumberChange = (number: string) => {
    if (+number <= 0) setItemCount(1)
    setItemCount(+number)
  }

  const handleAddToCart = () => {
    saveItemToCart({
      productId,
      quantity: itemCount,
      price,
      name,
      img,
    })
  }

  return (
    <div className='flex items-center gap-4'>
      <Input
        value={`${itemCount}`}
        label='Product count'
        radius={'full'}
        type='number'
        onChange={e => onNumberChange(e.target.value)}
        min={1}
        endContent={
          itemCount > 1 ? (
            <p> Total value:${(price * itemCount).toFixed(2)}</p>
          ) : null
        }
      />
      <Button
        aria-label='add to the cart'
        color='warning'
        className='text-white'
        isDisabled={itemCount <= 0}
        onPress={handleAddToCart}
        isIconOnly
      >
        <ShoppingCart />
      </Button>
    </div>
  )
}
