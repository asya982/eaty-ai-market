"use client";

import { FC } from "react";
import NavLink from "@/components/nav-link/nav-link";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/store.png";
import Cart from "@/components/header/cart";
import { usePathname } from "next/navigation";
import { Routes } from "@/enums/routes";
import { Button } from "@nextui-org/react";
import { logout } from "@/lib/actions/auth";

const WITHOUT_HEADER = [Routes.LOG_IN, Routes.SIGN_UP] as string[];

export const Header: FC<{ isAuth?: boolean }> = ({ isAuth = false }) => {
  const pathname = usePathname();

  if (WITHOUT_HEADER.includes(pathname)) return null;

  return (
    <header className="flex py-3 px-4 gap-5 shadow-md bg-transparent">
      <Link href={Routes.INDEX} className="transition-up">
        <Image src={logo} alt="eaty-logo" className="w-10 h-10" />
      </Link>
      <nav className="flex-1 flex justify-between">
        <div className="flex">
          {isAuth && <NavLink href={Routes.CHAT} linkName="Chat-bot" />}
          <NavLink href={Routes.PRODUCTS} linkName="Products" />
        </div>
        {isAuth ? (
          <>
            <Button onPress={async () => await logout()}>Log out</Button>
            <Cart />
          </>
        ) : (
          <NavLink href={Routes.SIGN_UP} linkName={"Sign up"} />

        )}
      </nav>
    </header>
  );
};
