import { FC } from 'react'
import Link from 'next/link'
import i18next from 'i18next'
import styles from '../static/Header.module.scss'
import { conferenceName } from '../utils/constants'

import { ColorThemeSwitch } from './ColorThemeSwitch'

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>{conferenceName}</a>
      </Link>
      <div className={styles.linksWrapper}>
        <nav className={styles.links}>
          <Link href="/#about">
            <a className={styles.link}>{i18next.t('about')}</a>
          </Link>
          <Link href="/#speakers">
            <a className={styles.link}>{i18next.t('speakers')}</a>
          </Link>
          <Link href="/#timetable">
            <a className={styles.link}>{i18next.t('timetable')}</a>
          </Link>
          <Link href="/#staffs">
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
