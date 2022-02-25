import useSWR from 'swr';
import QuestionComponent from './question.component';
import styles from '../../styles/components/faq/faqList.module.scss';
import { Question } from '../../models/question.model';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const fetcher = (url: any) => fetch(url, { // Fetcher for the SWR request
  headers: new Headers({
    'Authorization': `Bearer ${process.env.TOKEN_STRAPI}` // Attach Strapi token store in environment
  })
}).then(response => response.json());

const FaqList: NextPage = () => {
  const router = useRouter(); // Router injection to know the actual locale of the page
  const {locale, locales, defaultLocale} = router; // Unpack router locale information
  var {data, error} = useSWR(`${process.env.QUESTIONS_API}?locale=${locale}`, fetcher); // Fetch information from the API using long pulling

  function dataMapper() {
    return data.data.map((_data: any) => _data.attributes);
  }

  var questions: Question[] = data? dataMapper() : []; // Render attributes

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