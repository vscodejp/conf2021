import React from 'react'
import Head from 'next/head'
import styles from '@static/Home.module.scss'

import SEO from '@components/SEO'
import NavSection from '@components/NavSection'
import ConceptSection from '@components/ConceptSection'
import { SocialSection } from '@components/SocialSection'
import AboutSection from '@components/AboutSection'
import { MainEventPlayer } from '@components/PlayerSection'
import TimetableSection from '@components/TimetableSection'
import StaffSection from '@components/StaffSection'
import SupporterSection from '@components/SupporterSection'
import FooterSection from '@components/FooterSection'
import { defaultLanguage, languages } from 'root/i18n.config'
import { conferenceName } from '@utils/constants'
import { urlPrefix } from '@utils/endpoints.constants'

export default function Home() {
  return (
    <>
      <SEO />
      <div className={styles.container}>
        <Head>
          <title>{conferenceName}</title>
          <link rel="icon" href={`${urlPrefix}/favicon.ico`} />
        </Head>

        <NavSection />

        <main className={styles.main}>
          <ConceptSection />
          <SocialSection />
          <AboutSection />
          <MainEventPlayer />
          <TimetableSection />
          <StaffSection />
          <SupporterSection />
        </main>

        <FooterSection />
      </div>
    </>
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
