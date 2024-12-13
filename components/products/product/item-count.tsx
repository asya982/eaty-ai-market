'use client'

import { Minus, Plus } from '@geist-ui/icons'
import { Button } from '@nextui-org/button'
import React, { FC, useState } from 'react'

type TItemCountProps = {
  initialCount?: number
  onCountChange: (currentNumber: number) => void
}

export const ItemCount: FC<TItemCountProps> = ({ initialCount = 1 }) => {
  const [itemCount, setItemCount] = useState<number>(initialCount)

  const onNumberChange = (number: number) => {
    if (number <= 0) setItemCount(1)
    setItemCount(number)
  }

  return (
    <div className='flex items-center gap-4'>
      <Button
        color='warning'
        isDisabled={itemCount <= 0}
        onPress={() => onNumberChange(itemCount - 1)}
        isIconOnly
        radius='full'
      >
        <Minus />
      </Button>
      <div>
        <p>{itemCount}</p>
      </div>
      <Button
        color='warning'
        onPress={() => onNumberChange(itemCount + 1)}
        isIconOnly
        radius='full'
      >
        <Plus />
      </Button>
    </div>
  )
}
