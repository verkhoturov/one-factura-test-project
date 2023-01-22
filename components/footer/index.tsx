import Link from "next/link";
import { Logo } from "./one-factura-logo";
import neotopiaLogo from "./images/neotopia.png";
import mcVisaLogo from "./images/mc-visa.png";
import anpcLogo from "./images/anpc.svg";

import styles from "./index.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.linksRow}>
          <div className={styles.col}>
            <div className={styles.logoWrapper}>
              <Link href="/">
                <Logo />
              </Link>
            </div>

            <div className={styles.neotopiaLogoWrapper}>
              <img src={neotopiaLogo.src} alt="neotopia logo" />
            </div>
          </div>
          <div className={styles.col}>
            <h3 className={styles.title}>e-Factura</h3>

            <div className={styles.mcVisaLogoWrapper}>
              <img src={mcVisaLogo.src} alt="mc visa logo" />
            </div>
          </div>
          <div className={styles.col}>
            <h3 className={styles.title}>caracteristici</h3>
            <div className={styles.anpcLogoWrapper}>
              <Link href="https://www.anpc.gov.ro" target="_blank">
                <img src={anpcLogo.src} alt="anpc logo" />
              </Link>
            </div>
          </div>
          <div className={styles.col}>
            <h3 className={styles.title}>resurse</h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link href="/" className={styles.link}>
                  Întrebări frecvente
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/" className={styles.link}>
                  manuale
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/" className={styles.link}>
                  informații juridice
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3 className={styles.title}>contacte</h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link href="mailto:info@onefactura.ro" className={styles.link}>
                  info@onefactura.ro
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="tel:+40312296083" className={styles.link}>
                  +40 (31) 229-6083
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/" className={styles.link}>
                  sau revenim noi cu apel
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.infoRow}>
          <div className={styles.info}>
            <span className={styles.infoText}>
              (c) copyring 2022 OneFactura
            </span>
          </div>
          <div className={styles.info}>
            <span className={styles.infoText}>
              Toate drepturile rezervate |{" "}
              <Link href="/">Termeni și Condiții</Link> |{" "}
              <Link href="/">Politica de confidențialitate</Link> |{" "}
              <Link href="/">Politica modulelor cookie</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
