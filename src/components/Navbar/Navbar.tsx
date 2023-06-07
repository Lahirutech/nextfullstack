import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'Portfolio',
      url: '/portfolio',
    },
    {
      id: 3,
      title: 'Blog',
      url: '/blog',
    },
    {
      id: 4,
      title: 'About',
      url: '/about',
    },
    {
      id: 5,
      title: 'Contact',
      url: '/contact',
    },
    {
      id: 6,
      title: 'Dashboard',
      url: '/dashboard',
    },
  ];
  return (
    <div className={styles.navContainer}>
      <div className={styles.companyName}> Company name</div>
      <div className={styles.navItems}>
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
          >
            {link.title}
          </Link>
        ))}
        <button className={styles.logoutBtn}>Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;
