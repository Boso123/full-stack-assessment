import useSWR from 'swr';
import QuestionComponent from './question.component';
import styles from '../../styles/components/faq/faqList.module.scss';
import { Question } from '../../models/question.model';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

/**
 * Renew the user token and fetch the data from the server
 * @param url_data Url API wich provides de data
 * @param url_auth Url API wich provides de authentication
 * @returns `Promise<any>` Promise with the response of the data API in json Format
 */
const fetcher = async (url_data: any, url_auth: any) => {
  var token = await fetch(url_auth, { // Fetch token
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      identifier: process.env.USER,
      password: process.env.PASSWORD
    })
  });

  var _token = await token.json();
  token = _token.jwt; // Get token from response

  var result = await fetch(url_data, { // Fetcher for the SWR request
    headers: new Headers({
      'Authorization': `Bearer ${token}` // Attach Strapi token store in environment
    })
  });

  return result.json()
}

const FaqList: NextPage = () => {
  const router = useRouter(); // Router injection to know the actual locale of the page
  const { locale } = router; // Unpack router locale information
  var { data: question, error } = useSWR(
    [`${process.env.QUESTIONS_API}?locale=${locale}`, `${process.env.STRAPI_AUTH}`], fetcher); // Fetch information from the API using long pulling

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