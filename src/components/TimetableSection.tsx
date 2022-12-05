import { FC } from 'root/react-app-env'
import i18next from 'i18next'
import styles from '@static/Section.module.scss'
import Schedule from './Schedule'

const TimetableSection: FC = () => {
  return (
    <section id={'timetable'} className={styles.section}>
      <h2>{i18next.t('timetable')}</h2>
      <Schedule />
    </section>
  )
}

export default TimetableSection
