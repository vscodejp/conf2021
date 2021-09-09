import { FC } from 'react'
import i18next from 'i18next'
import styles from '../static/Section.module.scss'

const Speakers: FC = () => {
  return (
    <section id={'speakers'} className={styles.section}>
      <h2>{i18next.t('speakers')}</h2>
      <h3>{i18next.t('coming_soon')}</h3>
    </section>
  )
}

export default Speakers
