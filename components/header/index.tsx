import Link from "next/link";
import logoImg from "./logo.png";
import styles from "./index.module.scss";
import React from "react";

export const Header = ({ children }: { children?: React.ReactNode }) => (
  <header className={styles.wrapper}>
    <div className={styles.inner}>
      <Link href="/">
        <img src={logoImg.src} alt="one factura logo" className={styles.logo} />
      </Link>
      {children}
    </div>
  </header>
);
