import { COLORS } from '@/constants/ui'
import { TCategory } from '@/types/products'
import { Chip } from '@nextui-org/chip'
import React, { FC } from 'react'

type TCategoryProps = TCategory

export const Category: FC<TCategoryProps> = ({ name, icon }) => {
  return (
    <Chip
      variant='shadow'
      color={COLORS[Math.floor(Math.random() * COLORS.length)]}
      className='cursor-pointer'
      startContent={<p>{icon}</p>}
    >
      {name}
    </Chip>
  )
}
