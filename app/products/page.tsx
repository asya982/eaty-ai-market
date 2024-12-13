import React, { Suspense } from 'react'
import { ProductCard } from '@/components/products/product-card'
import { getCategories, getProducts } from '@/lib/actions/products'
import CategoriesList from '@/components/products/categories-list'
import { Search } from '@/components/products/search'
import { PaginationProducts } from '@/components/products/pagination'
import { RecommendedSection } from '@/components/products/recommended-section/recommended-section'
import ProductsLoadPage from './loading'
import { ProductsNotFound } from '@/components/products/products-not-found'

const Products = async ({ searchParams }) => {
  const params = await searchParams
  const query = params?.query || ''
  const currentPage = Number(params?.page) || 1
  const { products, total, error } = await getProducts({ query, currentPage })
  const { categories } = await getCategories()

  if (error) return <p>Something went wrong</p>

  return (
    <section className='flex flex-col items-center gap-3'>
      <div className='flex flex-wrap gap-3 items-center justify-evenly m-3 w-full'>
        <Search />
        <CategoriesList categories={categories} />
      </div>
      {!query && (
        <RecommendedSection recommendedList={products?.slice(6, -1) || []} />
      )}
      <Suspense fallback={<ProductsLoadPage />}>
        <div className='gap-2 grid grid-cols-2 sm:grid-cols-4'>
          {products?.length ? (
            products?.map(el => <ProductCard key={el._id} product={el} />)
          ) : (
            <ProductsNotFound />
          )}
        </div>
      </Suspense>
      <PaginationProducts total={total} currentPage={currentPage} />
    </section>
  )
}

export default Products
