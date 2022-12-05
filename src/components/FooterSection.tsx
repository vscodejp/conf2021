import { FC } from 'root/react-app-env'
import i18next from 'i18next'
import styles from '@static/Footer.module.scss'
import { organizationName } from '@utils/constants'

const FooterSection: FC = () => {
  const lang = i18next.language.substring(0, 2)
  return (
    <footer className={styles.footer}>
      <p className={styles.contact}>
        <a
          href={`/${lang}/code-for-conduct`}
          aria-label="Link to Code for Conduct"
          aria-describedby={i18next.t('code_of_conduct')}
        >
          {i18next.t('code_of_conduct')}
        </a>
        <a
          href={`/${lang}/privacy-policy`}
          aria-label="Link to Privacy Policy"
          aria-describedby={i18next.t('privacy_policy')}
        >
          {i18next.t('privacy_policy')}
        </a>
        <a
          href={`/${lang}/contact`}
          aria-label="Link to Contact"
          aria-describedby={i18next.t('contact')}
        >
          {i18next.t('contact')}
        </a>
        <a
          href={`/${lang}/pre-event`}
          aria-label="Link to Pre Event"
          aria-describedby={i18next.t('pre_event')}
        >
          {i18next.t('pre_event')}
        </a>
      </p>
      <p className={styles.copyright}>
        {`Created © 2021 ${organizationName}. All Rights Reserved.`}
      </p>
    </footer>
  )
}

export default FooterSection
