import { FC } from 'root/react-app-env'
import styles from '@static/Concept.module.scss'
import { urlPrefix } from '@utils/endpoints.constants'

const ConceptSection: FC = () => {
  return (
    <div id={'concept'} className={styles.concept}>
      <img alt="conference concept" src={`${urlPrefix}/concept.png`} />
    </div>
  )
}

export default ConceptSection
