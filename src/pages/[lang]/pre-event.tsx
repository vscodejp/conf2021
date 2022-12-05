import i18next from 'i18next'

import { Button } from '@components/Button'
import NavSection from '@components/NavSection'
import { PreEventPlayer } from '@components/PlayerSection'
import FooterSection from '@components/FooterSection'
import styles from '@static/Home.module.scss'
import { urlPrefix } from '@utils/endpoints.constants'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavSection />

      <main className={styles.main}>
        <PreEventPlayer />
      </main>

      <Button path={urlPrefix} tooltip={i18next.t('back_to_top')}>
        {i18next.t('back_to_top')}
      </Button>

      <FooterSection />
    </div>
  )
}
