import React from 'react';
import styles from './category.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import { items } from './data';
import { notFound } from 'next/navigation';

interface MyObject {
  applications: { id: number; title: string; desc: string; image: string }[];
  illustrations: { id: number; title: string; desc: string; image: string }[];
  websites: { id: number; title: string; desc: string; image: string }[];
}

const getData = (category: string) => {
  const data: { id: number; title: string; desc: string; image: string }[] =
    items[category as keyof MyObject];

  if (data) {
    return data;
  }
  return notFound();
};

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h2 className={styles.catTitle}>{params.category}</h2>
      {data.map((item) => (
        <div
          className={styles.categoryContent}
          key={item.id}
        >
          <div className={styles.descGroup}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <div className={styles.catBtn}>
              {' '}
              <Button
                text='See More'
                url={''}
              />
            </div>
          </div>

          <div className={styles.imgContainer}>
            <Image
              src={item.image}
              fill
              alt=''
              className={styles.img}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
