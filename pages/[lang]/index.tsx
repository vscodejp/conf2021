import React from 'react'
import Head from 'next/head'
import styles from '../../static/Home.module.scss'

import SEO from '../../components/SEO'
import Header from '../../components/Header'
import Concept from '../../components/Concept'
import About from '../../components/About'
import { MainEventPlayer } from '../../components/Player'
import Timetable from '../../components/Timetable'
import Staffs from '../../components/Staffs'
import Supporters from '../../components/Supporters'
import Footer from '../../components/Footer'
import { conferenceName } from '../../utils/constants'
import { defaultLanguage, languages } from '../../i18n.config'
import { urlPrefix } from '../../utils/urlPath'
import { Social } from '../../components/Social'

export default function Home() {
  return (
    <>
      <SEO />
      <div className={styles.container}>
        <Head>
          <title>{conferenceName}</title>
          <link rel="icon" href={`${urlPrefix}/favicon.ico`} />
        </Head>

        <Header />

        <main className={styles.main}>
          <Concept />
          <Social />
          <About />
          <MainEventPlayer />
          <Timetable />
          <Staffs />
          <Supporters />
        </main>

        <Footer />
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
