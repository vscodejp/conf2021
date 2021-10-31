import { FC } from 'react'
// import Image from 'next/image'
import styles from '../static/Concept.module.scss'
import { urlPrefix } from '../utils/urlPath'

const Concept: FC = () => {
  return (
    <div id={'concept'} className={styles.concept}>
      <img alt="conference concept" src={`${urlPrefix}/concept.png`} />
    </div>
  )
}

export default Concept
