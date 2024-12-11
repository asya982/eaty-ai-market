import React from "react";
import { SearchIcon } from "@/assets/icons/searchIcon";
import { ProductCard } from "@/components/products/product-card";
import { getProducts } from "@/lib/actions/products";
import { Input } from "@nextui-org/input";

const Products = async () => {
  const { products } = await getProducts();

  return (
    <section>
      <Input
        isClearable
        label="Search"
        placeholder="Type to search..."
        radius="lg"
        startContent={<SearchIcon />}
      />
      <h2>You might like it</h2>
      <h2>Our customers liked it</h2>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {products?.map((el) => (
          <ProductCard key={el.name} product={el} />
        ))}
      </div>
    </section>
  );
};

export default Products;
