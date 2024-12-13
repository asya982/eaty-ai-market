import React, { FC } from 'react'

import { Link } from '@nextui-org/link'
import { Image } from '@nextui-org/image'

import { TCartItem } from '@/types/cart'
import { calculateTotalPrice } from '@/utils/cart'
import { ItemCount } from '../products/product/item-count'
import { Button } from '@nextui-org/react'

type TCartItemProps = Omit<TCartItem, 'productId'> & {
  showControls?: boolean
  productId?: string
}

export const CartItem: FC<TCartItemProps> = ({
  productId = '',
  name,
  img,
  price,
  quantity,
  showControls = false,
}) => {
  return (
    <div className='flex items-center gap-5 border-1 rounded-md p-3'>
      <Image
        src={img}
        alt={name}
        aria-label={name + 'image'}
        width={100}
        height={100}
        className='object-cover'
      />
      <Link
        underline='hover'
        color='foreground'
        aria-label={`go to ${name} page`}
        href={`/products/${productId}`}
        className='font-bold text-xl'
      >
        {name}
      </Link>

      <div className='flex flex-1 items-center justify-end gap-4'>
        {showControls ? (
          <ItemCount initialCount={quantity} onCountChange={() => {}} />
        ) : (
          <p>{quantity}</p>
        )}
        <p>x ${price}</p>
      </div>
      <span className='text-2xl font-bold flex flex-col gap-1'>
        {calculateTotalPrice(quantity, price)}
        {showControls && (
          <Button variant='light' color='danger' className='underline'>
            Remove
          </Button>
        )}
      </span>
    </div>
  )
}
