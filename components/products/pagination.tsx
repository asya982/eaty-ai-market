'use client'

import React, { FC } from 'react'
import { Pagination } from '@nextui-org/pagination'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

type TPaginationProductsProps = {
  currentPage: number
  total?: number
}

export const PaginationProducts: FC<TPaginationProductsProps> = ({
  currentPage,
  total = 0,
}) => {
  const pathname = usePathname()
  const { replace } = useRouter()
  const searchParams = useSearchParams() || ''

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Pagination
      color={'warning'}
      onChange={createPageURL}
      initialPage={currentPage}
      total={total}
    />
  )
}
