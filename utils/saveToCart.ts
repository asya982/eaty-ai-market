"use client";

import { OrderProduct } from "@/types/dto/order.dto";

export const getCartItems = (): [] => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

export const saveItemToCart = (item: OrderProduct) => {
  if (typeof window === "undefined") return [];
  const currentItems = JSON.parse(localStorage.getItem("cart") || "[]");

  localStorage.setItem("cart", JSON.stringify([...currentItems, item]));
};
