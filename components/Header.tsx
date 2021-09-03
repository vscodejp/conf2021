import { FC } from 'react'
import Link from 'next/link'
import styles from '../static/Header.module.scss'
import { useLocale } from '../hooks/useLocale'
import { conferenceName } from '../utils/constants'

import { ColorThemeSwitch } from './ColorThemeSwitch'

const Header: FC = () => {
  const { t } = useLocale()
  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>{conferenceName}</a>
      </Link>
      <div className={styles.wrapper}>
        <nav className={styles.links}>
          <Link href="/#about">
            <a className={styles.link}>{t.about}</a>
          </Link>
          <Link href="/#speakers">
            <a className={styles.link}>{t.speakers}</a>
          </Link>
          <Link href="/#timetable">
            <a className={styles.link}>{t.timetable}</a>
          </Link>
          <Link href="/#staffs">
            <a className={styles.link}>{t.staffs}</a>
          </Link>
        </nav>
        <a href="#" className={styles.link}>
          <ColorThemeSwitch />
        </a>
      </div>
    </div>
  )
}

export default Header
