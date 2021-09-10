import { FC, useMemo } from 'react'
import i18next from 'i18next'
// import Image from 'next/image'
import styles from '../static/Staff.module.scss'
import { members } from '../contents/members'

const Staffs: FC = () => {
  const filterMembers = useMemo(() => {
    return members.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })
  }, [])
  return (
    <section id={'staffs'} className={styles.section}>
      <h2>{i18next.t('staffs')}</h2>
      <div className={styles.staffs}>
        {filterMembers.map((member) => {
          return (
            <div key={member.name} className={styles.icon}>
              <a href={member.url} target="_blank" rel="noopener noreferrer">
                <img alt={`Image ${member.name}`} src={`../icons/${member?.iconFilename}`} />
                <div className={styles.info}>
                  <div className={styles.name}>{member.name}</div>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Staffs
