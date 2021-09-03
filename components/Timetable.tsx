import { FC } from 'react'
import styles from '../static/Section.module.scss'
import { useLocale } from '../hooks/useLocale'

// import Schedule from './Schedule'

const Timetable: FC = () => {
  const { t } = useLocale()
  return (
    <section id={'timetable'} className={styles.section}>
      <h2>{t.timetable}</h2>
      <h3>{t.coming_soon}</h3>
    </section>
  )
}

export default Timetable
