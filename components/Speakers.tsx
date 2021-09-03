import { FC } from 'react'
import styles from '../static/Section.module.scss'
import { useLocale } from '../hooks/useLocale'

const Speakers: FC = () => {
  const { t } = useLocale()
  return (
    <section id={'speakers'} className={styles.section}>
      <h2>{t.speakers}</h2>
      <h3>{t.coming_soon}</h3>
    </section>
  )
}

export default Speakers
