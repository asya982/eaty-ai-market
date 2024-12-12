import { TCategory } from '@/types/products'
import React, { FC } from 'react'
import { Category } from './category'

type TCategoriesListProps = {
    categories: TCategory[]
}

const CategoriesList: FC<TCategoriesListProps> = ({ categories }) => {
    return (<div className='flex gap-3 m-2 flex-wrap items-center'>
        <h6 className='underline font-playfair'>Categories: </h6>
        {categories?.map((el) => <Category key={el._id} {...el} />
        )}
    </div>
    )
}

export default CategoriesList