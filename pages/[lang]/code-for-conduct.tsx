import i18next from 'i18next'
import ReactMarkdown from 'react-markdown'
import * as fs from 'fs'
import styles from '../../static/Home.module.scss'

import ButtonElement from '../../components/ButtonElement'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { defaultLanguage, languages } from '../../i18n.config'

const urlPrefix = process.env.NODE_ENV === 'production' ? 'https://vscodejp.github.io/conf2021' : ''

export default function Home({ terms }) {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>{i18next.t('code_of_conduct')}</h1>

        <div className={styles.content}>
          <ReactMarkdown skipHtml={false}>{terms}</ReactMarkdown>
        </div>

        <ButtonElement path={urlPrefix}>{i18next.t('back_to_top')}</ButtonElement>
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
  const terms = fs.readFileSync(process.cwd() + '/docs/code-for-conduct.md', 'utf8')
  return {
    props: {
      terms: terms,
      language: languages.includes(params.lang) ? params.lang : defaultLanguage,
    },
  }
}
