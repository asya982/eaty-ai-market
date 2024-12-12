import React from "react";
import { ProductCard } from "@/components/products/product-card";
import { getCategories, getProducts } from "@/lib/actions/products";
import CategoriesList from "@/components/products/categories-list";
import { Search } from "@/components/products/search";
import { PaginationProducts } from "@/components/products/pagination";


const Products = async ({ searchParams }) => {
  const params = await searchParams;
  const query = params?.query || '';
  const currentPage = Number(params?.page) || 1;
  const { products, total, error } = await getProducts({ query, currentPage });
  const { categories } = await getCategories()
  console.log(error)

  if (error) return <p>Something went wrong</p>

  return (
    <section className="m-6 flex flex-col items-center gap-3">
      <div className="flex flex-wrap gap-3 items-center justify-evenly m-3 w-full">
        <Search />
        <CategoriesList categories={categories} />
      </div>
      <h2>You might like it</h2>
      <h2>Our customers liked it</h2>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {products?.map((el) => (
          <ProductCard key={el._id} product={el} />
        ))}
      </div>
      <PaginationProducts total={total} currentPage={currentPage} />
    </section>
  );
};

export default Products;
