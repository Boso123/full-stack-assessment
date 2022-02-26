import useSWR from 'swr';
import QuestionComponent from './question.component';
import styles from '../../styles/components/faq/faqList.module.scss';
import { Question } from '../../models/question.model';
import { NextPage } from 'next';
import { useRouter } from 'next/router';


const fetcherCredential = (url: any) => fetch(url, {
  method: 'POST',
  headers: new Headers({
    'Content-Type': 'application/json'
  }),
  body: JSON.stringify({
    identifier: process.env.USER,
    password: process.env.PASSWORD
  })
}).then(response => response.json());

const fetcher = (url: any, token: any) => fetch(url, { // Fetcher for the SWR request
  headers: new Headers({
    'Authorization': `Bearer ${token}` // Attach Strapi token store in environment
  })
}).then(response => response.json());

const FaqList: NextPage = () => {
  const router = useRouter(); // Router injection to know the actual locale of the page
  const { locale } = router; // Unpack router locale information
  var question: any = undefined;
  //var { data: token } = useSWR(`${process.env.STRAPI_AUTH}`, fetcherCredential);
  //var { data: question, error } = useSWR(token ? [`${process.env.QUESTIONS_API}?locale=${locale}`, token.jwt] : `${process.env.QUESTIONS_API}?locale=${locale}`, fetcher); // Fetch information from the API using long pulling

  function dataMapper() { // Map the attributes of the fetched data
    try {
      return question.data.map((_data: any) => _data.attributes);
    } catch (err) {
      return [];
    }
  }

  var questions: Question[] = question ? dataMapper() : []; // Render attributes

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