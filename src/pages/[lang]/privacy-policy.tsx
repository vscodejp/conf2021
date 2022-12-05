import i18next from 'i18next'
import { defaultLanguage, languages } from 'root/i18n.config'
import ReactMarkdown from 'react-markdown'
import * as fs from 'fs'

import { Button } from '@components/Button'
import NavSection from '@components/NavSection'
import FooterSection from '@components/FooterSection'
import styles from '@static/Home.module.scss'
import { urlPrefix } from '@utils/endpoints.constants'

export default function Home({ terms }) {
  return (
    <div className={styles.container}>
      <NavSection />

      <main className={styles.main}>
        <h2 className={styles.title}>{i18next.t('privacy_policy')}</h2>

        <div className={styles.content}>
          <ReactMarkdown skipHtml={false}>{terms}</ReactMarkdown>
        </div>

        <Button path={urlPrefix} tooltip={i18next.t('back_to_top')}>
          {i18next.t('back_to_top')}
        </Button>
      </main>

      <FooterSection />
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
  const terms = fs.readFileSync(process.cwd() + '/src/docs/privacy-policy.md', 'utf8')
  return {
    props: {
      terms: terms,
      language: languages.includes(params.lang) ? params.lang : defaultLanguage,
    },
  }
}
