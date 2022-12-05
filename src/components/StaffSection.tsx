import { FC } from 'root/react-app-env'
import i18next from 'i18next'
import { useArray } from '@hooks/useArray'
import { staffs } from '@contents/staffs'
import styles from '@static/Staff.module.scss'

const StaffSection: FC = () => {
  const { sortArray } = useArray()

  const members = sortArray(staffs)

  return (
    <section id="staffs" className={styles.section}>
      <h2>{i18next.t('staffs')}</h2>
      <div className={styles.staffs}>
        {members.map((person) => {
          return (
            <div key={person.name} className={styles.icon}>
              <a href={person.url} target="_blank" rel="noopener noreferrer">
                <img
                  alt=""
                  src={person?.iconFilename ? `../icons/${person?.iconFilename}` : person?.iconName}
                />
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

export default StaffSection
