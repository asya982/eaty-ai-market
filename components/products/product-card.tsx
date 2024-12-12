"use client";
import React, { FC } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Tooltip } from "@nextui-org/tooltip";
import { Card, CardFooter } from "@nextui-org/card";
import { TProducts } from "@/types/products";
import { ShoppingCart } from '@geist-ui/icons'
import { faker } from "@faker-js/faker";

type ProductCardProps = {
  product: TProducts;
  size?: 'sm'
};

export const ProductCard: FC<ProductCardProps> = ({ product, size }) => {
  const router = useRouter();
  const pathname = usePathname()
  const handleNavigate =
    () => router.push(`${pathname}/${product._id}`)

  return (
    <Card
      shadow="sm"
      className={`${size === 'sm' ? "w-[180px] h-[180px]" : ''}`}
    >
      <Image onClick={handleNavigate} removeWrapper className="cursor-pointer w-full h-full object-cover" src={product.img} alt={product.name + "photo"} />
      <CardFooter className="items-start flex-col before:bg-white/10 bg-slate-50 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <b>{product.name}</b>
        <div className="flex justify-between items-center w-full">
          <p className="">${product.price || faker.commerce.price()}</p>
          <Tooltip content="Add to the cart!" showArrow>
            <Button size="sm" isIconOnly variant="flat" ><ShoppingCart /></Button>
          </Tooltip>
        </div>
      </CardFooter>
    </Card>
  )
};
