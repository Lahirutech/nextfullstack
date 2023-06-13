import React from 'react';
import styles from './singlepost.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PostsType } from '../page';

const getSinglePost = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getSinglePost(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }: { params: { id: string } }) => {
  const data: PostsType = await getSinglePost(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.content}</p>
          <div className={styles.author}>
            <Image
              src={'/assets/img/prof.webp'}
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Lanka</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}></p>
      </div>
    </div>
  );
};

export default BlogPost;
