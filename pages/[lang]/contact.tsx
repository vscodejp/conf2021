import i18next from 'i18next'
import styles from '../../static/Home.module.scss'

import { ButtonElement } from '../../components/ButtonElement'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { defaultLanguage, languages } from '../../i18n.config'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>{i18next.t('contact')}</h1>

        <div className={styles.content}>
          <ButtonElement
            path={
              'https://docs.google.com/forms/d/e/1FAIpQLSeDsAlBwncykjmyia0Z-7W-1IMIPHBGZisRZJT_KZ8J8y6rRQ/viewform'
            }
            isExternalLink
          >
            {i18next.t('there_is_google_form')}
          </ButtonElement>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: languages.map((lang) => {
      return { params: { lang: lang } }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      language: languages.includes(params.lang) ? params.lang : defaultLanguage,
    },
  }
}
