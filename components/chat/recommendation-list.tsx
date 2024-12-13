import React, { FC } from 'react'
import { TProducts } from '@/types/products'
import { ProductCard } from '../products/product-card'

type TRecommendationListProps = {
  recommendations: TProducts[]
}

export const RecommendationList: FC<TRecommendationListProps> = ({
  recommendations,
}) => {
  return (
    <div className='gap-2 grid grid-cols-2 sm:grid-cols-4'>
      {recommendations?.map(el => (
        <ProductCard key={el._id || Math.random()} product={el} size='sm' />
      ))}
    </div>
  )
}
