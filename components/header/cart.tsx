"use client";

import Image from "next/image";
import Link from "next/link";
import cart from "@/assets/shopping-bag.png";
import { Badge } from "@nextui-org/badge";
import { getCartItems } from "@/utils/saveToCart";
import { Tooltip } from "@nextui-org/tooltip";
import { Routes } from "@/enums/routes";

const Cart = () => {
  const cartItems = getCartItems();
  return (
    <Tooltip content="Cart">
      <Link href={Routes.CART} className="transition-up">
        <Badge
          content={cartItems.length}
          color="danger"
          size="sm"
          variant="shadow"
          placement="top-left"
          showOutline={false}
          isInvisible={!cartItems.length}
        >
          <Image src={cart} alt="cart-link" className="w-10 h-10" />
        </Badge>
      </Link>
    </Tooltip>
  );
};

export default Cart;
