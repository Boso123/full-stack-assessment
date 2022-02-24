import React from 'react';
import { NextPage } from 'next';
import QuestionComponent from './question.component';
import styles from '../../styles/components/faq/faqList.module.scss';
import { Question } from '../../models/question.model';

const FaqList: NextPage = () => {
  var questions: Question[] = [{
    answerd: "a",
    question: "g"
  }, {
    answerd: "a",
    question: "c"
  }, {
    answerd: "a",
    question: "c"
  }]
  return (
    <div className={styles.expansionPannel}>
      {
        questions.map((question, i) => (<QuestionComponent key={i} question={question.question}
          answerd={question.answerd}></QuestionComponent>))
      }
    </div>
  )
}

export default FaqList;