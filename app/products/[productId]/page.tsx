import styles from './page.module.css'

import { getProductById } from '@/lib/actions/products'
import { notFound } from 'next/navigation'
import { Status } from '@/constants/api_response'
import { Category } from '@/components/products/category'
import { AddToCart } from '@/components/products/product/add-to-cart'
import { Image } from '@nextui-org/image'

const Meal = async ({ params }) => {
  const { productId } = await params

  const { product, status } = await getProductById(productId)

  if (status === Status.NOT_FOUND || !product) notFound()

  return (
    <section className='flex gap-6 justify-evenly items-center'>
        <Image shadow='sm' src={product.img} alt={product.name} style={{height: '50vh'}} className='h-[50vh]' />
      <div className='rounded-lg border-2 border-orange-950 p-4 flex flex-col gap-4'>
        <h1 className='font-playfair text-large font-bold'>{product.name}</h1>
        <p>{product.description}</p>
        <Category {...product.category} />
        <p>
          Allergens:{' '}
          <b>{product.allergens.map(({ name }) => name).join(', ')}</b>
        </p>
        <p>
          Price: <b>${product.price}</b>
        </p>
        <AddToCart
          price={product.price}
          img={product.img}
          name={product.name}
          productId={product._id}
        />
      </div>
    </section>
  )
}

export default Meal
