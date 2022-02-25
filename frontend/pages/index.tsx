import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import FaqList from '../components/faq/faqList.component';
import Nav from '../components/navs/nav.component'
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  const router = useRouter(); // Router injection to know the actual locale of the page
  const { locale } = router; // Unpack router locale information

  return (
    <div className={styles.container}>
      <Head>
        <title>Frequently Asked Questions | Stand For Trees </title>
        <meta name="description" content="Coding challenge Meta Carbon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.image}></div>

      <div className={styles.content}>
        <Nav />

        <div className={styles.contentContainer}>

          <div className={styles.verticalSpacer}></div>

          <div className={styles.faqContainer}>
            <div className={styles.titleContainer}>
              <div className={styles.titleStripe}></div>
              {
                locale == 'en' ?
                  <div className={styles.title}>
                    <h2>Frequently Asked Questions</h2>
                  </div> : <div className={styles.title}>
                    <h2>Preguntas Frecuentes</h2>
                  </div>
              }
            </div>

            <div className={styles.faqs}>
              <FaqList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
