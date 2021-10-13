import { FC } from 'react'
import Link from 'next/link'
import i18next from 'i18next'
import styles from '../static/Header.module.scss'
import { conferenceName } from '../utils/constants'

import { ColorThemeSwitch } from './ColorThemeSwitch'

const Header: FC = () => {
  const lang = i18next.language.substring(0, 2)
  return (
    <div className={styles.header}>
      <Link href={`/${lang}/`}>
        <a aria-label="link to title" aria-describedby="Title" className={styles.logo}>
          {conferenceName}
        </a>
      </Link>
      <div className={styles.links_wrapper}>
        <nav className={styles.links}>
          <Link href={`/${lang}/#about`}>
            <a
              aria-label="Link to About"
              aria-describedby={i18next.t('about')}
              className={styles.link}
            >
              {i18next.t('about')}
            </a>
          </Link>
          <Link href={`/${lang}/#timetable`}>
            <a
              aria-label="Link to Timetable"
              aria-describedby={i18next.t('timetable')}
              className={styles.link}
            >
              {i18next.t('timetable')}
            </a>
          </Link>
          <Link href={`/${lang}/#staffs`}>
            <a
              aria-label="Link to Staffs"
              aria-describedby={i18next.t('staffs')}
              className={styles.link}
            >
              {i18next.t('staffs')}
            </a>
          </Link>
          <Link href={`/${lang}/#supporters`}>
            <a
              aria-label="link to Aupporters"
              aria-describedby="Supporters"
              className={styles.link}
            >
              {i18next.t('supporters')}
            </a>
          </Link>
          <a
            href="#"
            aria-label="switch color theme"
            aria-describedby="Switch Color Theme"
            className={styles.link}
          >
            <ColorThemeSwitch />
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Header
