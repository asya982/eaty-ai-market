import React from 'react'
import notFound from '@/assets/not-found-pizza.png'
import Image from 'next/image'

export const ProductsNotFound = () => {
  return (
    <section className='flex gap-4 w-full justify-center h-[50vh] items-center'>
      <Image src={notFound} alt='not-found-pizza' width={200} height={200} />
      <div>
        <h3 className='text-2xl'>Seems like nothing nothing found</h3>
        <p className='text-gray-400'>Try search something else</p>
      </div>
    </section>
  )
}
