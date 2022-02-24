import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import styles from '../../styles/components/faq/question.module.scss';

interface props {
  question: string,
  answerd: string
  key: number
};

const openStatus = false;

const question: NextPage<props> = ({ question, answerd }) => {
  return (
    <div className={styles.expansionContainer}>
      <div className={styles.title}>
        <h1>{question}</h1>
        <div className='spacer'></div>
        <div className={styles.button}>
          {
            openStatus ?
              "-" : "+"
          }
        </div>
      </div>
      <div className={styles.answerdContainer}>
        <div className={styles.answerd}>
          <p>{answerd}</p>
        </div>
      </div>
    </div>
  )
}

export default question;