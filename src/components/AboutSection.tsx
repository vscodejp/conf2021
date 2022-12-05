import { FC } from 'root/react-app-env'
import i18next from 'i18next'
import styles from '@static/Section.module.scss'

const AboutSection: FC = () => {
  return (
    <section id={'about'} className={styles.section}>
      <h2>{'AboutSection'}</h2>
      <div className={styles.detail}>
        <dl>
          <dt>{i18next.t('date_and_time')}</dt>
          <dd>{i18next.t('november_20_2021')}</dd>
        </dl>
        <dl>
          <dt>{i18next.t('venue')}</dt>
          <dd>{i18next.t('online')}</dd>
        </dl>
        <dl>
          <dt>{i18next.t('entry_fee')}</dt>
          <dd>{i18next.t('free')}</dd>
        </dl>
        <dl>
          <dt>{i18next.t('way_to_participate')}</dt>
          <dd>
            <a
              href="https://vscode.connpass.com/event/221961/"
              aria-label={i18next.t('apply_for_participation_from_connpass_form')}
              target="_blank"
              rel="noopener noreferrer"
            >
              {i18next.t('apply_for_participation_from_connpass_form')}
            </a>
          </dd>
        </dl>
      </div>
    </section>
  )
}

export default AboutSection
