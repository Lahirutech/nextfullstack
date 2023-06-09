'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

import styles from './login.module.css';
import { useRouter, useSearchParams } from 'next/navigation';

const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    setError(params.get('error') as string);
    setSuccess(params.get('success') as string);
  }, [params]);

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'authenticated') {
    router?.push('/dashboard');
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn('credentials', {
      email,
      password,
    });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{success ? success : 'Welcome Back'}</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <input
          type='text'
          placeholder='Email'
          required
          className={styles.input}
        />
        <input
          type='password'
          placeholder='Password'
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {error && error}
      </form>
      <button
        onClick={() => {
          signIn('google');
        }}
        className={styles.button + ' ' + styles.google}
      >
        Login with Google
      </button>
      <span className={styles.or}>- OR -</span>
      <Link
        className={styles.link}
        href='/dashboard/register'
      >
        Create new account
      </Link>
      {/* <button
        onClick={() => {
          signIn("github");
        }}
        className={styles.button + " " + styles.github}
      >
        Login with Github
      </button> */}
    </div>
  );
};

export default Login;
