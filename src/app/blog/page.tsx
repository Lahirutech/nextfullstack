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
  return <div className={styles.mainContainer}></div>;
};

export default Blog;
