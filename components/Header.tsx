import { FC } from 'react'
import Link from 'next/link'
import i18next from 'i18next'
import styles from '../static/Header.module.scss'
import { conferenceName } from '../utils/constants'

import { ColorThemeSwitch } from './ColorThemeSwitch'

const urlPrefix = process.env.NODE_ENV === 'production' ? '/conf2021' : ''

const Header: FC = () => {
  const lang = i18next.language.substring(0, 2)
  return (
    <div className={styles.header}>
      <Link href={`${urlPrefix}/${lang}/`}>
        <a className={styles.logo}>{conferenceName}</a>
      </Link>
      <div className={styles.linksWrapper}>
        <nav className={styles.links}>
          <Link href={`${urlPrefix}/${lang}/#about`}>
            <a className={styles.link}>{i18next.t('about')}</a>
          </Link>
          <Link href={`${urlPrefix}/${lang}/#speakers`}>
            <a className={styles.link}>{i18next.t('speakers')}</a>
          </Link>
          <Link href={`${urlPrefix}/${lang}/#timetable`}>
            <a className={styles.link}>{i18next.t('timetable')}</a>
          </Link>
          <Link href={`${urlPrefix}/${lang}/#staffs`}>
            <a className={styles.link}>{i18next.t('staffs')}</a>
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
