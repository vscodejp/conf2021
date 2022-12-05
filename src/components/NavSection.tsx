import { useEffect, useRef } from 'react'
import { FC } from 'root/react-app-env'
import Link from 'next/link'
import i18next from 'i18next'
import styles from '@static/Header.module.scss'
import { conferenceName } from '@utils/constants'

import { ColorThemeSwitch } from '@components/module/ColorThemeSwitch'

const NavSection: FC = () => {
  const lang = i18next.language.substring(0, 2)

  const ref = useRef<HTMLDivElement | any>()

  useEffect(() => {
    window.onscroll = function updateNav() {
      if (isPageOffset()) {
        ref.current?.classList.add(styles.navActive)
      } else {
        ref.current?.classList.remove(styles.navActive)
      }
    }
  }, [])

  function isPageOffset(): boolean {
    const offset = ref.current?.offsetTop

    return window.pageYOffset > offset!
  }

  return (
    <div ref={ref} className={styles.header}>
      <Link href={`/${lang}/`} className={styles.logo}>
        {conferenceName}
      </Link>
      <div className={styles.links_wrapper}>
        <nav className={styles.links}>
          <Link href={`/${lang}/#about`} className={styles.link}>
            {i18next.t('about')}
          </Link>
          <Link href={`/${lang}/#timetable`} className={styles.link}>
            {i18next.t('timetable')}
          </Link>
          <Link href={`/${lang}/#staffs`} className={styles.link}>
            {i18next.t('staffs')}
          </Link>
          <Link href={`/${lang}/#supporters`} className={styles.link}>
            {i18next.t('supporters')}
          </Link>
          <a
            href="src/components#"
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

export default NavSection
