import useSWR from 'swr';
import QuestionComponent from './question.component';
import styles from '../../styles/components/faq/faqList.module.scss';
import { Question } from '../../models/question.model';
import { NextPage } from 'next';
import { useRouter } from 'next/router';


const fetchCredential = (url: any) => fetch(url, {
  body: JSON.stringify({
    identifier: process.env.USER,
    password: process.env.PASSWORD
  })
}).then(response => response.json()).then(result => result.jwt);

const fetcher = (url: any, token: any) => fetch(url, { // Fetcher for the SWR request
  headers: new Headers({
    'Authorization': `Bearer ${token}` // Attach Strapi token store in environment
  })
}).then(response => response.json());

const FaqList: NextPage = () => {
  const router = useRouter(); // Router injection to know the actual locale of the page
  const {locale} = router; // Unpack router locale information
  var {data: token} = useSWR(`${process.env.AUTH}`, fetchCredential);
  var {data: question, error} = useSWR([`${process.env.QUESTIONS_API}?locale=${locale}`, token], fetcher); // Fetch information from the API using long pulling

  function dataMapper() {
    return question.data.map((_data: any) => _data.attributes);
  }

  var questions: Question[] = question? dataMapper() : []; // Render attributes

  return (
    <div className={styles.expansionPannel}>
      {
        // Map every question and showed in the question component
        questions.map((question, i) => (<QuestionComponent key={i} question={question.Question}
          answer={question.Answer}></QuestionComponent>))
      }
    </div>
  )
}

export default FaqList;