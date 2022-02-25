import { NextPage } from "next";
import { useRouter } from "next/router";
import styles from '../../styles/components/nav/nav.module.scss';
import LinkTitle from '../link.component';
import LocaleSwitcher from '../localeSwitcher.component'

const NavEn: NextPage = () => {
  const router = useRouter(); // Router injection to know the actual locale of the page
  const { locale } = router; // Unpack router locale information

  // Definition of the text in different locations
  const enLinks = [{ text: "For Business", href: "google.com" },
  { text: "Donations", href: "google.com" },
  { text: "Footprint Calculator", href: "google.com" },
  { text: "Affilate Program", href: "google.com" }];
  const esLinks = [{ text: "Para empresas", href: "google.com" },
  { text: "Donasiones", href: "google.com" },
  { text: "Calculadora de carbono", href: "google.com" },
  { text: "Programa de afiliados", href: "google.com" }];

  /**
   * Select the links information based in the actual locale
   * @returns locate links information
   */
  function selectLocale() {
    switch (locale) {
      case 'en':
        return enLinks;
      case 'es':
        return esLinks;
      default:
        return enLinks;
    }
  }

  return (
    <div className={styles.header}>
      <div className={styles.firstHeader}>
        <div className={styles.icons}>

        </div>
        <div className="spacer"></div>
        <div className={styles.links}>
          {
            selectLocale().map((locale, i) => {
              return (
                <LinkTitle name={locale.text} href={locale.href} key={i}></LinkTitle>
              )
            })
          }
          <LocaleSwitcher />
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default NavEn;