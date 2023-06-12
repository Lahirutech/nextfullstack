import React, { PropsWithChildren } from 'react';
import styles from './portfolio.module.css';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <h1 className={styles.mainStyles}>Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;
