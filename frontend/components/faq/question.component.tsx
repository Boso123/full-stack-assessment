import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { NextPage } from 'next';
import styles from '../../styles/components/faq/question.module.scss';

interface props {
  question: string,
  answer: string
  key: number
};


const Question: NextPage<props> = ({ question, answer }) => {
  var [openStatus, setOpenStatus] = useState(false); //Tuple with the funtion to update the variable

  /**
   * Change the status of the statusElement
   */
  function changeStatus() {
    setOpenStatus(!openStatus);
  }

  return (
    <div className={styles.expansionContainer}>
      <div className={styles.title} onClick={changeStatus}>
        <h1>{question}</h1>
        <div className='spacer'></div>
        <div className={styles.button}>
          {
            openStatus ?
              "-" : "+"
          }
        </div>
      </div>
      <div className={`${styles.answerContainer} ${openStatus ? styles.openAnswedContainer : ''}`}>
        <div className={styles.answer}>
          {/* Parse markdown ans show it in the element */}
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{answer}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default Question;