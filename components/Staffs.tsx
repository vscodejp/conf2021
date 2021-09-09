import { FC } from 'react'
import i18next from 'i18next'
// import Image from 'next/image'
import styles from '../static/Staff.module.scss'
import { members } from '../contents/members'

const Staffs: FC = () => {
  return (
    <section id={'staffs'} className={styles.section}>
      <h2>{i18next.t('staffs')}</h2>
      <div className={styles.staffs}>
        {members.map((member) => {
          return (
            <div key={member.name} className={styles.icon}>
              <img alt={`Image ${member.name}`} src={`../icons/${member.iconFilename}`} />
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
