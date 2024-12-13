'use client'

import { TProducts } from '@/types/products'
import { Badge } from '@nextui-org/react'
import React, { FC } from 'react'
import { ProductCard } from '../product-card'
import Image from 'next/image'
import forYou from '@/assets/for_you.png'
import recommend from '@/assets/recommendation.png'
import styles from './recommended-section.module.css'

type TRecommendedSectionProps = {
  isPersonal?: boolean
  recommendedList: TProducts[]
}

export const RecommendedSection: FC<TRecommendedSectionProps> = ({
  recommendedList,
  isPersonal = true,
}) => {
  const productList = (shouldHide = false) =>
    recommendedList.map(product => (
      <div
        aria-hidden={shouldHide}
        className={styles.group}
        key={product._id + 'recommendation'}
      >
        <ProductCard product={product} />
      </div>
    ))

  return (
    <div className='p-2 rounded-md border-1 border-yellow-100 w-full flex flex-col'>
      <Badge
        content='AI Generated'
        color='warning'
        className='text-white'
        showOutline={false}
      >
        <h2 className='font-playfair text-3xl underline flex items-center gap-3'>
          <Image
            alt='recommendation photo'
            src={isPersonal ? forYou : recommend}
            width={70}
            height={70}
          />
          {isPersonal ? 'You might like it' : 'Our customers liked it'}
        </h2>
      </Badge>
      <section className={`${styles.carousel} rounded-md`}>
        {productList()}
        {productList(true)}
      </section>
    </div>
  )
}
