'use client';
import { ContextType, ThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react';
import styles from './darkmode.module.css';

const DarkmodeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext) as ContextType;
  return (
    <div
      className={styles.container}
      onClick={toggle}
    >
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode == 'light' ? { left: '2px' } : { right: '2px' }}
      ></div>
    </div>
  );
};

export default DarkmodeToggle;
