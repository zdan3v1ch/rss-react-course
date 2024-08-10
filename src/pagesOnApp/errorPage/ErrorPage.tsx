import React from 'react';
import Link from 'next/link';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={styles.errorBlock}>
      <h1>Error Page</h1>
      <Link href="/">Home</Link>
    </div>
  );
};

export default ErrorPage;
