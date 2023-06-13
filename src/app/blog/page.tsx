import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './blog.module.css';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch Data');
  }
  const json = await res.json();
  return json;
}

export type PostsType = {
  _id: string;
  id: number;
  userId: number;
  img: string;
  title: string;
  desc: string;
  content: string;
};

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item: PostsType) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=''
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
