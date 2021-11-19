import { FC } from 'react'
import Link from 'next/link'
import i18next from 'i18next'
import styles from '../static/Footer.module.scss'
import { organizationName } from '../utils/constants'

const Footer: FC = () => {
  const lang = i18next.language.substring(0, 2)
  return (
    <footer className={styles.footer}>
      <p className={styles.contact}>
        <Link href={`/${lang}/code-for-conduct`}>
          <a aria-label="Link to Code for Conduct" aria-describedby={i18next.t('code_of_conduct')}>
            {i18next.t('code_of_conduct')}
          </a>
        </Link>
        <Link href={`/${lang}/privacy-policy`}>
          <a aria-label="Link to Privacy Policy" aria-describedby={i18next.t('privacy_policy')}>
            {i18next.t('privacy_policy')}
          </a>
        </Link>
        <Link href={`/${lang}/contact`}>
          <a aria-label="Link to Contact" aria-describedby={i18next.t('contact')}>
            {i18next.t('contact')}
          </a>
        </Link>
        <Link href={`/${lang}/pre-event`}>
          <a aria-label="Link to Pre Event" aria-describedby={i18next.t('pre_event')}>
            {i18next.t('pre_event')}
          </a>
        </Link>
      </p>
      <p className={styles.copyright}>
        {`Created © 2021 ${organizationName}. All Rights Reserved.`}
      </p>
    </footer>
  )
}

export default Footer
