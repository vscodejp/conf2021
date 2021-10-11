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
        <a className={styles.logo}>{conferenceName}</a>
      </Link>
      <div className={styles.linksWrapper}>
        <nav className={styles.links}>
          <Link href={`/${lang}/#about`}>
            <a className={styles.link}>{i18next.t('about')}</a>
          </Link>
          <Link href={`/${lang}/#timetable`}>
            <a className={styles.link}>{i18next.t('timetable')}</a>
          </Link>
          <Link href={`/${lang}/#staffs`}>
            <a className={styles.link}>{i18next.t('staffs')}</a>
          </Link>
          <Link href={`/${lang}/#supporters`}>
            <a className={styles.link}>{i18next.t('supporters')}</a>
          </Link>
          <a href="#" className={styles.link}>
            <ColorThemeSwitch />
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Header
