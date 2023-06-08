import Link from 'next/link';
import React from 'react';
import style from './button.module.css';

const Button = ({ url, text }: { url: string; text: string }) => {
  return (
    <Link href={`${url}`}>
      <button className={style.btn}>{text}</button>
    </Link>
  );
};

export default Button;
