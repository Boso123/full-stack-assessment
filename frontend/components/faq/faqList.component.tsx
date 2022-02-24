import React from 'react';
import { NextPage } from 'next';
import Question from './question.component';
import styles from '../../styles/components/faq/faqList.module.scss';

type props = {
  questions: Iquestion[];
}

const faqList: NextPage<props> = ({ questions }) => {
  return (
    <div className={styles.expansionPannel}>
      {
        questions.map((question, i) => (<Question key={i} question={question.question}
          image={question.image} answerd={question.answerd}></Question>))
      }
    </div>
  )
}

interface Iquestion {
  question: string,
  answerd: string,
  image: string
}

export default faqList;