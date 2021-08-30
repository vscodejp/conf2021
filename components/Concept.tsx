import { FC } from 'react'
// import Image from 'next/image'
import styles from '../static/Concept.module.scss'

const urlPrefix = process.env.NODE_ENV === 'production' ? '/conf2021' : ''

const Concept: FC = () => {
  return (
    <div id={'concept'} className={styles.concept}>
      <img alt="conference concept" src={`${urlPrefix}/concept.png`} />
    </div>
  )
}

export default Concept
