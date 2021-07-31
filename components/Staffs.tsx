import { FC } from 'react'
import Image from 'next/image'
import styles from '../static/Section.module.scss'
import { members } from '../contents/members'

const Staffs: FC = () => {
  return (
    <section id={'staffs'} className={styles.section}>
      <h2>{'Staffs'}</h2>
      <div className={styles.detail}>
        {members.map((member) => {
          return (
            <div key={member.name} className={styles.icon}>
              <Image
                alt={`Image ${member.name}`}
                src={`/icons/${member.iconFilename}`}
                width={120}
                height={120}
              />
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
