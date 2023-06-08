import React from 'react';
import styles from './portfolio.module.css';

const Layout = ({ children }: any) => {
  return (
    <div>
      <h1 className={styles.mainStyles}>Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;
