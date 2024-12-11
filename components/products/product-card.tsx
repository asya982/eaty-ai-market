"use client";
import { TProducts } from "@/types/products";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import placeholder from "@/assets/shopping-bag.png";
import { Badge, Tooltip } from "@nextui-org/react";

type ProductCardProps = {
  product: TProducts;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  return (
    <Badge content={product.category.icon}>
      <Card
        isFooterBlurred
        isPressable
        shadow="sm"
        onPress={() => router.push(product._id)}
      >
        <CardBody>
          <Image src={placeholder} alt={product.name + "photo"} />
        </CardBody>
        <CardFooter className="items-start flex-col before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <b>{product.name}</b>
          <div className="flex justify-between items-center w-full">
            <p className="text-default-500">${product.price}</p>
            {product.category.icon}
            <Tooltip content="Add to the cart!" showArrow>
              <Button size="sm" isIconOnly variant="light"></Button>
            </Tooltip>
          </div>
        </CardFooter>
      </Card>
    </Badge>
  );
};
