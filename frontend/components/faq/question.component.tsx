import React from 'react';
import { NextPage } from 'next';

type props = {
  question: string,
  answerd: string
  image: string
  key: number
}

const question: NextPage<props> = ({question, answerd, image}) => {
  return (
    <h1>{question}</h1>
  )
}

export default question;