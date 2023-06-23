import React from 'react';
import styles from './footer.navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>©2023 Lanka Rathnayaka. All rights reserved.</div>
      <div className={styles.socialIcons}>
        <Link href=''>
          <Image
            src='/assets/img/1.png'
            width={15}
            height={15}
            className={styles.icon}
            alt='Lama Dev Facebook Account'
          />
        </Link>
        <Link href=''>
          <Image
            src='/assets/img/2.png'
            width={15}
            height={15}
            className={styles.icon}
            alt='Lama Dev Facebook Account'
          />
        </Link>
        <Link href=''>
          <Image
            src='/assets/img/3.png'
            width={15}
            height={15}
            className={styles.icon}
            alt='Lama Dev Facebook Account'
          />
        </Link>
        <Link href=''>
          <Image
            src='/assets/img/4.png'
            width={15}
            height={15}
            className={styles.icon}
            alt='Lama Dev Facebook Account'
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
