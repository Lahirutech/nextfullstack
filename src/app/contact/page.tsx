import React from 'react';
import styles from './contact.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const Contact = () => {
  return (
    <div className={styles.contactMain}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.contactSec}>
        <div className={styles.contactImg}>
          <Image
            src='/assets/img/contact.png'
            alt=' '
            fill
            className={styles.img}
          />
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <input
              type='text'
              placeholder='Name'
              className={styles.name}
            />
            <input
              type='email'
              placeholder='Email'
              className={styles.email}
            />
            <textarea
              placeholder='Message'
              className={styles.msg}
            />
            <Button
              url='#'
              text='Send'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
