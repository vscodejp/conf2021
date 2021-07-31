import Head from 'next/head'
import styles from '../static/Home.module.scss'

import SEO from '../components/SEO'
import Header from '../components/Header'
import About from '../components/About'
import Speakers from '../components/Speakers'
import Timetable from '../components/Timetable'
import Staffs from '../components/Staffs'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <SEO />
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main className={styles.main}>
          <About />
          <Speakers />
          <Timetable />
          <Staffs />
        </main>

        <Footer />
      </div>
    </>
  )
}
