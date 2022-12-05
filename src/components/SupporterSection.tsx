import { FC } from 'root/react-app-env'
import i18next from 'i18next'
import { useArray } from '@hooks/useArray'
import { supporters } from '@contents/supporters'
import styles from '@static/Staff.module.scss'

const SupporterSection: FC = () => {
  const { sortArray } = useArray()

  const members = sortArray(supporters)

  return (
    <section id="supporters" className={styles.section}>
      <h2>{i18next.t('supporters')}</h2>
      <div className={styles.supporters}>
        {members.map((person) => {
          return (
            <div key={person.name} className={styles.icon}>
              <a href={person.url} target="_blank" rel="noopener noreferrer">
                <img alt="" src={person?.iconName} />
                <div className={styles.info}>
                  <div className={styles.name}>{person.name}</div>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SupporterSection
