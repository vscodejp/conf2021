import { FC } from 'react'
import Link from 'next/link'
import i18next from 'i18next'
import styles from '../static/Footer.module.scss'
import { organizationName } from '../utils/constants'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.contact}>
        <Link href="../code-for-conduct">{i18next.t('code_of_conduct')}</Link>
        <Link href="../privacy-policy">{i18next.t('privacy_policy')}</Link>
        <Link href="../contact">{i18next.t('contact')}</Link>
      </p>
      <p className={styles.copyright}>
        {`Created © 2021 ${organizationName}. All Rights Reserved.`}
      </p>
    </footer>
  )
}

export default Footer
