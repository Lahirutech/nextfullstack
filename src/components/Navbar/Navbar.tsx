'use client';
import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import DarkmodeToggle from '../darkmodeToggle/DarkmodeToggle';
import { signOut, useSession } from 'next-auth/react';
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
    url: '/blog2',
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
const Navbar = () => {
  const session = useSession();

  return (
    <div className={styles.navContainer}>
      <div className={styles.companyName}> Company name</div>
      <div className={styles.navItems}>
        <DarkmodeToggle />
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
          >
            {link.title}
          </Link>
        ))}
        {session.status === 'authenticated' && (
          <button
            className={styles.logoutBtn}
            onClick={() => signOut()}
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
