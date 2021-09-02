import styles from '../static/Home.module.scss'

import ButtonElement from '../components/ButtonElement'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>{'問い合わせ'}</h1>

        <div className={styles.content}>
          <ButtonElement
            path={
              'https://docs.google.com/forms/d/e/1FAIpQLSeDsAlBwncykjmyia0Z-7W-1IMIPHBGZisRZJT_KZ8J8y6rRQ/viewform'
            }
            isExternalLink
          >
            {'Googleフォームはこちら'}
          </ButtonElement>
        </div>
      </main>

      <Footer />
    </div>
  )
}
