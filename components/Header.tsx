import { FC } from 'react'
import styles from '../static/Header.module.scss'
import { conferenceName } from '../utils/constants'

import { ColorThemeSwitch } from './ColorThemeSwitch'

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <a href="/" className={styles.logo}>
        {conferenceName}
      </a>
      <div className={styles.linksWrapper}>
        <nav className={styles.links}>
          <a href="/#about" className={styles.link}>
            {'About'}
          </a>
          <a href="/#speakers" className={styles.link}>
            {'Speakers'}
          </a>
          <a href="/#timetable" className={styles.link}>
            {'Timetable'}
          </a>
          <a href="/#staffs" className={styles.link}>
            {'Staffs'}
          </a>
          <a href="#" className={styles.link}>
            <ColorThemeSwitch />
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Header
