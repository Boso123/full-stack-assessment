import useSWR from 'swr';
import QuestionComponent from './question.component';
import styles from '../../styles/components/faq/faqList.module.scss';
import { Question } from '../../models/question.model';
import { NextPage } from 'next';

const fetcher = (url: any) => fetch(url, {
  headers: new Headers({
    'Authorization': `Bearer ${process.env.TOKEN_STRAPI}`
  })
}).then(response => response.json());

const FaqList: NextPage = () => {
  var {data, error} = useSWR(process.env.QUESTIONS_API, fetcher);
  var questions: Question[] = data? data.data.map((_data: any) => _data.attributes) : []; // Render attributes

  return (
    <div className={styles.expansionPannel}>
      {
        questions.map((question, i) => (<QuestionComponent key={i} question={question.Question}
          answer={question.Answer}></QuestionComponent>))
      }
    </div>
  )
}

export default FaqList;