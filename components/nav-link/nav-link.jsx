"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./nav-link.module.css";

const NavLink = ({ linkName, href }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${styles.link} ${path.startsWith(href) ? styles.active : undefined}`}
    >
      {linkName}
    </Link>
  );
};

export default NavLink;
