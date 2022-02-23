import React from 'react';
import Link from 'next/link';
import styles from "../styles/components/LinkTitle.module.scss";
import { NextPage } from 'next';

type Props = {
  name: string,
  href: string
};

const LinkTitle: NextPage<Props> = ({ name, href }) => {
  return (
    <div className={styles.container}>
      <Link href={href}>
        <a className={styles.link}>{name}</a>
      </Link>
      <div className={styles.bar}></div>
    </div>
  );
}

export default LinkTitle;