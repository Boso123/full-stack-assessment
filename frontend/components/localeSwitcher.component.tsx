import React from 'react';
import Link from 'next/link';
import styles from "../styles/components/LinkTitle.module.scss";
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const LocaleSwitcher: NextPage = () => {
  const router = useRouter()
  const { locale } = router;
  const { pathname, query, asPath } = router

  return (
    <div className={styles.container}>
      {
        locale == 'en' ? <Link href={{pathname, query}} as={asPath} locale="es">
          <a className={styles.link}>Spanish</a>
        </Link> : <Link href={{pathname, query}} as={asPath} locale="en">
          <a className={styles.link}>Ingles</a>
        </Link>
        
      }
      <div className={styles.bar}></div>
    </div>
  );
}

export default LocaleSwitcher;