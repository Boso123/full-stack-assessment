import type { NextPage } from 'next';
import Head from 'next/head';
import FaqList from '../components/faq/faqList.component';
import LinkTitle from '../components/link.component'
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  var datos = [{
    answerd: "b",
    image: "",
    question: "a"
  }, {
    answerd: "s",
    image: "",
    question: "d"
  }]

  return (
    <div className={styles.container}>
      <Head>
        <title>Frequently Asked Questions | Stand For Trees </title>
        <meta name="description" content="Coding challenge Meta Carbon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header}>
        <div className={styles.firstHeader}>
          <div className={styles.icons}>

          </div>
          <div className="spacer"></div>
          <div className={styles.links}>
            <LinkTitle name="For Business" href=""></LinkTitle>
            <LinkTitle name="Donations" href=""></LinkTitle>
            <LinkTitle name="Footprint Calculator" href=""></LinkTitle>
            <LinkTitle name="Affilate Program" href=""></LinkTitle>
            <LinkTitle name="Español" href=""></LinkTitle>
          </div>
        </div>
        <div>

        </div>
      </div>
      <div className={styles.image}></div>
      <div className={styles.contentContainer}>
        <div className={styles.verticalSpacer}></div>

        <div className={styles.faqContainer}>
          <FaqList questions={datos}></FaqList>
        </div>
      </div>
    </div>
  )
}

export default Home
