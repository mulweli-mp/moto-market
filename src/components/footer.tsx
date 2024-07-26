import React, { FC } from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer: FC = () => (
  <div className={styles.container}>
    <h2 className={styles.footerHead}>MotoMarket (Pty)Ltd</h2>
    <p className={styles.footerText}>
      This is a simple website built to showcase my advanced front end dev
      skills. It is fully responsive for all device types (i.e. mobile and
      desktop) in both the shop and table website mode.
    </p>

    <div className={styles.socialsContainer}>
      <a
        href="https://github.com/mulweli-mp"
        className={styles.iconsContainer}
        aria-label="GitHub"
      >
        <Image
          src="/logo-github.png"
          width={30}
          height={30}
          alt="GitHub logo"
        />
      </a>
      <a
        href="https://stackoverflow.com/users/11914626/mulweli-mushiana"
        className={styles.iconsContainer}
        aria-label="Stack Overflow"
      >
        <Image
          src="/logo-stackoverflow.png"
          width={30}
          height={30}
          alt="Stack Overflow logo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/mulweli-mushiana-a3a27428b"
        className={styles.iconsContainer}
        aria-label="LinkedIn"
      >
        <Image
          src="/logo-linkedIn.png"
          width={30}
          height={30}
          alt="LinkedIn logo"
        />
      </a>
      <a
        href="https://facebook.com/mulweli.mushiana"
        className={styles.iconsContainer}
        aria-label="Facebook"
      >
        <Image
          src="/logo-facebook.png"
          width={30}
          height={30}
          alt="Facebook logo"
        />
      </a>
    </div>
  </div>
);

export default Footer;
