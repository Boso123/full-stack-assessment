import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import LinkTitle from '../components/link.component'
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frequently Asked Questions | Stand For Trees </title>
        <meta name="description" content="Coding challenge Meta Carbon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="header">
        <div className="">
          <div className="icons"></div>
          <div className="links">
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
      <div className="image">

      </div>

      <div className="faq">

      </div>
    </div>
  )
}

export default Home
