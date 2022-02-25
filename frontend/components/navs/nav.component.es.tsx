import { NextPage } from "next";
import styles from '../../styles/components/nav/nav.module.scss';
import LinkTitle from '../link.component';

const NavEs: NextPage = () => {
  return (
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
  )
}

export default NavEs;