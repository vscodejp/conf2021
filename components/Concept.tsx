import { FC } from 'react'
// import Image from 'next/image'
import styles from '../static/Concept.module.scss'

const Concept: FC = () => {
  return (
    <div id={'concept'} className={styles.concept}>
      <img
        alt="conference concept"
        src={'/concept.png'}
        width={1300}
        height={683}
      />
    </div>
  )
}

export default Concept
