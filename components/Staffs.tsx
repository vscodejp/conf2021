import { FC } from 'react'
// import Image from 'next/image'
import styles from '../static/Staff.module.scss'
import { useLocale } from '../hooks/useLocale'
import { members } from '../contents/members'

const Staffs: FC = () => {
  const { t } = useLocale()
  return (
    <section id={'staffs'} className={styles.section}>
      <h2>{t.staffs}</h2>
      <div className={styles.staffs}>
        {members.map((member) => {
          return (
            <div key={member.name} className={styles.icon}>
              <img alt={`Image ${member.name}`} src={`icons/${member.iconFilename}`} />
              <div className={styles.info}>
                <div className={styles.name}>{member.name}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Staffs
