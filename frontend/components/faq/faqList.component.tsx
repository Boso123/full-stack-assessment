import React from 'react';
import { NextPage } from 'next';
import Question from './question.component';
import styles from '../../styles/components/faq/faqList.module.scss';

type props = {
  questions: question[];
}

const faqList: NextPage = (questions) => {
  return (
    <div className={styles.expansionPannel}>

    </div>
  )
}

interface question {
  question: string,
  answerd: string,
  image: string
}

export default faqList;