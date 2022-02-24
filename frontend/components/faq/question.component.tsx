import React, { useState } from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import styles from '../../styles/components/faq/question.module.scss';

interface props {
  question: string,
  answerd: string
  key: number
};


const Question: NextPage<props> = ({ question, answerd }) => {
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
      <div className={`${styles.answerdContainer} ${openStatus ? styles.openAnswedContainer : ''}`}>
        <div className={styles.answerd}>
          <p>{answerd}</p>
        </div>
      </div>
    </div>
  )
}

export default Question;