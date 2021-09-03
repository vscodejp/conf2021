import { FC } from 'react'
import Link from 'next/link'
import styles from '../static/Footer.module.scss'
import { useLocale } from '../hooks/useLocale'
import { organizationName } from '../utils/constants'

const Footer: FC = () => {
  const { t } = useLocale()
  return (
    <footer className={styles.footer}>
      <p className={styles.contact}>
        <Link href="/code-for-conduct">{t.code_of_conduct}</Link>
        <Link href="/privacy-policy">{t.privacy_policy}</Link>
        <Link href="/contact">{t.contact}</Link>
      </p>
      <p className={styles.copyright}>
        {`Created © 2021 ${organizationName}. All Rights Reserved.`}
      </p>
    </footer>
  )
}

export default Footer
